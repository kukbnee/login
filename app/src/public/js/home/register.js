  "use strict"

  const id = document.querySelector('#register-id');
  const name = document.querySelector('#register-pw');
  const pw = document.querySelector('#register-pw');
  const pwConfirm = document.querySelector('#register-pw');
  const registerBtn = document.querySelector('#register-action');

  const doRegister = () => {
    const reqParam = {
      id: id.value,
      name: name.value,
      pw: pw.value,
      pwConfirm: pwConfirm.value,
    };
    console.log(reqParam);
    fetch('/register', {
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
      console.error(new Error('회원가입중 에러 발생'));
    });
  };
  registerBtn.addEventListener('click', doRegister);