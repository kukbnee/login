// 이크마스크립트의 문법을 준수한다.
'use strict';

// 모듈
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 라우팅
const home = require('./src/routes/home');

// db
const pool = require('./src/config/db');

// 앱 세팅
app.set('views', './src/views'); // 화면뷰를 저장해줄 파일이 저장될 폴더 지정
app.set('view engine', 'ejs'); // 화면뷰를 어떤 엔진으로 해석할지 정한다

// use -> 미들웨어를 등록해주는 메서드드
app.use(express.static(`${__dirname}/src/public`)); // __dirname현재파일의 디렉토리 경로를 정적경로로 추가
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// '/'경로로 들어오면 home으로 보내준다
app.use('/', home);

// db연결
app.get('/a', async (req, res) => {
  let connection;
  try {
    console.log('DB Pool:', pool); // pool이 제대로 불러와지는지 확인
    connection = await pool.getConnection();
    const rows = await connection.query('SHOW TABLES');
    res.send(`Database connection successful: ${JSON.stringify(rows)}`);
  } catch(err) {
    res.status(500).send(`Database connection fail: ${err.message}`);
  } finally {
    if (connection) connection.release(); // 연결 해제
  }
});

// app.listen(3306, () => {
//   console.log(`Server is running on port ${3306}`);
// })

// 외부로 내보내기
module.exports = app;