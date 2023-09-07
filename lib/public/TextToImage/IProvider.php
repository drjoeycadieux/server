<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2023 Marcel Klehr <mklehr@gmx.net>
 *
 * @author Marcel Klehr <mklehr@gmx.net>
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
 */

namespace OCP\TextToImage;

use RuntimeException;

/**
 * This is the interface that is implemented by apps that
 * implement a text to image provider
 * @since 28.0.0
 */
interface IProvider {
	/**
	 * The localized name of this provider
	 * @since 28.0.0
	 */
	public function getName(): string;

	/**
	 * Processes a text
	 *
	 * @param string $prompt The input text
	 * @param resource $resource The file resource to write the image to
	 * @return void
	 * @since 28.0.0
	 * @throws RuntimeException If the text could not be processed
	 */
	public function generate(string $prompt, $resource): void;
}
