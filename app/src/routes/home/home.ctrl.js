'use strict';

const users = {
  id: ['test1', 'test2', 'test3'],
  pw: ['123', '1234', '12345'],
}
const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
};

const process = {
  login: (req, res) => {
    
    const id = req.body.id;
    const pw = req.body.pw;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: '로그인에 실패하셨습니다.',
    });
  },
}

module.exports = {
  output,
  process,
};