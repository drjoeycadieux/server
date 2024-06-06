/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

// register default shares types
if (!window.OC) {
	window.OC = {}
}

Object.assign(window.OC, {
	Share: {
		SHARE_TYPE_USER: 0,
		SHARE_TYPE_GROUP: 1,
		SHARE_TYPE_LINK: 3,
		SHARE_TYPE_EMAIL: 4,
		SHARE_TYPE_REMOTE: 6,
		SHARE_TYPE_CIRCLE: 7,
		SHARE_TYPE_GUEST: 8,
		SHARE_TYPE_REMOTE_GROUP: 9,
		SHARE_TYPE_ROOM: 10,
		SHARE_TYPE_DECK: 12,
		SHARE_TYPE_SCIENCEMESH: 15,
	},
})
