<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2024 Côme Chilliet <come.chilliet@nextcloud.com>
 *
 * @author Côme Chilliet <come.chilliet@nextcloud.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
namespace OCA\Webhooks\Tests\Db;

use OCA\Webhooks\Db\WebhookListenerMapper;
use OCP\IDBConnection;
use OCP\User\Events\UserCreatedEvent;
use Test\TestCase;

/**
 * @group DB
 */
class WebhookListenerMapperTest extends TestCase {
	private IDBConnection $connection;
	private WebhookListenerMapper $mapper;

	protected function setUp(): void {
		parent::setUp();

		$this->connection = \OCP\Server::get(IDBConnection::class);
		$this->pruneTables();

		$this->mapper = new WebhookListenerMapper(
			$this->connection,
		);
	}

	protected function tearDown(): void {
		$this->pruneTables();
		parent::tearDown();
	}

	protected function pruneTables() {
		$query = $this->connection->getQueryBuilder();
		$query->delete(WebhookListenerMapper::TABLE_NAME)->executeStatement();
	}

	public function testInsertListenerAndGetIt() {
		$listener1 = $this->mapper->addWebhookListener(
			'bob',
			'POST',
			'https://webhook.example.com/endpoint',
			UserCreatedEvent::class,
			null,
			null,
			null,
		);

		$listener2 = $this->mapper->getById($listener1->getId());

		$listener1->resetUpdatedFields();
		$this->assertEquals($listener1, $listener2);
	}
}
