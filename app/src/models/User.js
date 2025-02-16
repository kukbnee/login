'use strict';

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const { id, pw } = await UserStorage.getUserInfo(this.body.id)
    if (id) {
      if (id === this.body.id && pw === this.body.pw) {
        return { success: true };
      }
      return { success: false,
        msg: '비밀번호 틀림'
       };
    }
    return { success: false,
      msg: '존재하지 않는 아이디'
     };
  }
}

module.exports = User;