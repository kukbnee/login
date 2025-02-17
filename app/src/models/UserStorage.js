"use strict";

const db = require('../config/db');

class UserStorage {
  static #getUserInfo = (data, id) => {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((userLoad, userKey) => {
      userLoad[userKey] = users[userKey][idx];
      return userLoad;
    }, {});
    return userInfo;
  }

  static #getAllUserInfo(data, userKeys) {
    const users = JSON.parse(data);
    return userKeys.reduce((userLoad , userKey) => {
      if (users.hasOwnProperty(userKey)) {
        userLoad[userKey] = users[userKey];
      }
      return userLoad;
    }, {});
  }

  static getUsers = (...userKeys) => {
    
  }
  
  static getUserInfo(id) {
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, data) => {
      console.log(data);
    });
  }

  static async setUserInfo(newUserInfo) {

  }
}

module.exports = UserStorage;