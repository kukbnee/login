  "use strict"

  const id = document.querySelector('#register-id');
  const name = document.querySelector('#register-name');
  const pw = document.querySelector('#register-pw');
  const pwConfirm = document.querySelector('#register-pw');
  const registerBtn = document.querySelector('#register-action');

  const doRegister = () => {

    if(!id.value) return alert('아이디를 입력해주세요."');
    if(pw.value !== pwConfirm.value) return alert('비밀번호가 일치하지 않습니다.');

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
        alert(res.msg);
        location.href = '/login';
      } else {
        console.log(res);
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error('회원가입중 에러 발생'));
    });
  };
  registerBtn.addEventListener('click', doRegister);