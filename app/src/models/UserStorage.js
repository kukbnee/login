"use strict";

class UserStorage {
  static #users = {
    id: ['test1', 'test2', 'test3'],
    pw: ['123', '1234', '12345'],
    name: ['테스트1', '테스트2', '테스트3'],
  };

  static getUser = (...userKeys) => {
    const users = this.#users;
    return userKeys.reduce((userLoad , userKey) => {
      if (users.hasOwnProperty(userKey)) {
        userLoad[userKey] = users[userKey];
      }
      return userLoad;
    }, {});
  }
}

module.exports = UserStorage;