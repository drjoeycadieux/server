<?php
/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OCA\Files_External\Config;

use OC\Files\Storage\FailedStorage;
use OC\Files\Storage\Wrapper\Availability;
use OC\Files\Storage\Wrapper\KnownMtime;
use OCA\Files_External\Lib\PersonalMount;
use OCA\Files_External\Lib\StorageConfig;
use OCA\Files_External\Service\UserGlobalStoragesService;
use OCA\Files_External\Service\UserStoragesService;
use OCP\Files\Config\IMountProvider;
use OCP\Files\Storage;
use OCP\Files\Storage\IStorageFactory;
use OCP\Files\StorageNotAvailableException;
use OCP\IUser;
use Psr\Clock\ClockInterface;

/**
 * Make the old files_external config work with the new public mount config api
 */
class ConfigAdapter implements IMountProvider {
	public function __construct(
		private UserStoragesService $userStoragesService,
		private UserGlobalStoragesService $userGlobalStoragesService,
		private ClockInterface $clock,
	) {
	}

	/**
	 * Process storage ready for mounting
	 *
	 * @param StorageConfig $storage
	 * @param IUser $user
	 * @throws \OCP\AppFramework\QueryException
	 */
	private function prepareStorageConfig(StorageConfig &$storage, IUser $user) {
		foreach ($storage->getBackendOptions() as $option => $value) {
			$storage->setBackendOption($option, \OCA\Files_External\MountConfig::substitutePlaceholdersInConfig($value, $user->getUID()));
		}

		$objectStore = $storage->getBackendOption('objectstore');
		if ($objectStore) {
			$objectClass = $objectStore['class'];
			if (!is_subclass_of($objectClass, '\OCP\Files\ObjectStore\IObjectStore')) {
				throw new \InvalidArgumentException('Invalid object store');
			}
			$storage->setBackendOption('objectstore', new $objectClass($objectStore));
		}

		$storage->getAuthMechanism()->manipulateStorageConfig($storage, $user);
		$storage->getBackend()->manipulateStorageConfig($storage, $user);
	}

	/**
	 * Construct the storage implementation
	 *
	 * @param StorageConfig $storageConfig
	 * @return Storage
	 */
	private function constructStorage(StorageConfig $storageConfig) {
		$class = $storageConfig->getBackend()->getStorageClass();
		$storage = new $class($storageConfig->getBackendOptions());

		// auth mechanism should fire first
		$storage = $storageConfig->getBackend()->wrapStorage($storage);
		$storage = $storageConfig->getAuthMechanism()->wrapStorage($storage);

		return $storage;
	}

	/**
	 * Get all mountpoints applicable for the user
	 *
	 * @param \OCP\IUser $user
	 * @param \OCP\Files\Storage\IStorageFactory $loader
	 * @return \OCP\Files\Mount\IMountPoint[]
	 */
	public function getMountsForUser(IUser $user, IStorageFactory $loader) {
		$this->userStoragesService->setUser($user);
		$this->userGlobalStoragesService->setUser($user);

		$storageConfigs = $this->userGlobalStoragesService->getAllStoragesForUser();

		$storages = array_map(function (StorageConfig $storageConfig) use ($user) {
			try {
				$this->prepareStorageConfig($storageConfig, $user);
				return $this->constructStorage($storageConfig);
			} catch (\Exception $e) {
				// propagate exception into filesystem
				return new FailedStorage(['exception' => $e]);
			}
		}, $storageConfigs);


		\OC\Files\Cache\Storage::getGlobalCache()->loadForStorageIds(array_map(function (Storage\IStorage $storage) {
			return $storage->getId();
		}, $storages));

		$availableStorages = array_map(function (Storage\IStorage $storage, StorageConfig $storageConfig) {
			try {
				$availability = $storage->getAvailability();
				if (!$availability['available'] && !Availability::shouldRecheck($availability)) {
					$storage = new FailedStorage([
						'exception' => new StorageNotAvailableException('Storage with mount id ' . $storageConfig->getId() . ' is not available')
					]);
				}
			} catch (\Exception $e) {
				// propagate exception into filesystem
				$storage = new FailedStorage(['exception' => $e]);
			}
			return $storage;
		}, $storages, $storageConfigs);

		$mounts = array_map(function (StorageConfig $storageConfig, Storage\IStorage $storage) use ($user, $loader) {
			$storage->setOwner($user->getUID());
			if ($storageConfig->getType() === StorageConfig::MOUNT_TYPE_PERSONAL) {
				return new PersonalMount(
					$this->userStoragesService,
					$storageConfig,
					$storageConfig->getId(),
					new KnownMtime([
						'storage' => $storage,
						'clock' => $this->clock,
					]),
					'/' . $user->getUID() . '/files' . $storageConfig->getMountPoint(),
					null,
					$loader,
					$storageConfig->getMountOptions(),
					$storageConfig->getId()
				);
			} else {
				return new SystemMountPoint(
					$storageConfig,
					$storage,
					'/' . $user->getUID() . '/files' . $storageConfig->getMountPoint(),
					null,
					$loader,
					$storageConfig->getMountOptions(),
					$storageConfig->getId()
				);
			}
		}, $storageConfigs, $availableStorages);

		$this->userStoragesService->resetUser();
		$this->userGlobalStoragesService->resetUser();

		return $mounts;
	}
}
