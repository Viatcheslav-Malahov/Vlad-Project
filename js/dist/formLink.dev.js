"use strict";

document.querySelector('.form__link').addEventListener('click', function (event) {
  var emailInp = document.querySelector('.email__inp');

  if (emailInp.value == '') {
    alert('Enter email first plz');
    return false;
  } else {
    var xhr = new XMLHttpRequest();
    var oData = new FormData();
    oData.append('UserEmail', emailInp.value);
    xhr.open('POST', 'http://127.0.0.1:5500/index.html', false);
    xhr.send(oData); //window.location.href = './form.html'
  }
});