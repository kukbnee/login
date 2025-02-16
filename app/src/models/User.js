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

  async register() {
    try {
      await UserStorage.setUserInfo(this.body)
      return { success: true, msg: '회원가입이 되었습니다.'};
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = User;