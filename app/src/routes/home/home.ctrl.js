'use strict';

const UserStorage = require("../../models/UserStorage");
const User = require('../../models/User');

const output = {
  home: (req, res) => {
    // 렌더링할 뷰파일 경로 지정
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
  register: (req, res) => {
    res.render('home/register');
  },
};

const process = {
  login: (req, res) => {
    
    // const id = req.body.id;
    // const pw = req.body.pw;

    // const users = UserStorage.getUser('id', 'pw', 'name');
    // console.log( users);
    // const response = {};
    // if (users.id.includes(id)) {
    //   const idx = users.id.indexOf(id);
    //   if (users.pw[idx] === pw) {
    //     response.success = true;
    //     response.msg = '로그인에 성공하셨습니다.';
    //     return res.json(response);
    //   }
    // }

    // response.success = false;
    // response.msg = '로그인에 실패하셨습니다.';
    // return res.json(response);
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
  register: (req, res) => {
    
  }
}

module.exports = {
  output,
  process,
};