'use strict';

const express = require('express');
// 해당도메인으로 들어왔을때 클라이언트의 요청을 연결
const router = express.Router();

const ctrl = require('./home.ctrl');
router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);
router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register);

module.exports = router;