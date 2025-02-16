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
    return fs.readFile('./src/databases/users.json')
    .then(res => {
    return this.#getAllUserInfo(res, userKeys);

    })
    .catch(err => {
      throw err;
    });
    
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
  }

  

  static async setUserInfo(newUserInfo) {
    const users = await this.getUsers('id');
    if (users.id.includes(newUserInfo.id)) {
      throw '이미 존재하는 아이디입니다.';
    }
    delete newUserInfo.pwConfirm;
    const allUserInfo = await fs.readFile('./src/databases/users.json').then(res => JSON.parse(res));
    allUserInfo.id.push(newUserInfo.id);
    allUserInfo.pw.push(newUserInfo.pw);
    allUserInfo.name.push(newUserInfo.name);
    fs.writeFile('./src/databases/users.json', JSON.stringify(allUserInfo)); 
  }
}

module.exports = UserStorage;