  "use strict"

  const id = document.querySelector('#login-id');
  const pw = document.querySelector('#login-pw');
  const loginBtn = document.querySelector('button');

  const doLogin = () => {
    const reqParam = {
      id: id.value,
      pw: pw.value
    };
    console.log(reqParam);
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqParam)
    }).then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = '/';
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error('로그인중 에러 발생'));
    });
  };
  loginBtn.addEventListener('click', doLogin);