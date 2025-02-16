"use strict";

const fs = require('fs').promises;

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

  static getUser = (...userKeys) => {
    // const users = this.#users;
    return userKeys.reduce((userLoad , userKey) => {
      if (users.hasOwnProperty(userKey)) {
        userLoad[userKey] = users[userKey];
      }
      return userLoad;
    }, {});
  }
  
  static getUserInfo(id) {
    // const users = this.#users;
    return fs.readFile('./src/databases/users.json')
    .then(res => {
      return this.#getUserInfo(res, id);

    })
    .catch(err => {
      throw err;
    });
      // .then((req, res) => {
      //   console.log('>>>', res);
      // })
      // .catch(err => {
      //   console.log(err);
      // })
    
  }
}

module.exports = UserStorage;