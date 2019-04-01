import { httpGet } from './http';

/**
 * @module user
 */

/**
 * Load user info by id
 *
 * @param {number} id user id
 * @returns {Object} user info
 */
export function loadUser(id) {
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}

// eslint-disable-next-line no-unused-vars
export function saveUser(user) {
  throw new Error('Unimplemented');
}
