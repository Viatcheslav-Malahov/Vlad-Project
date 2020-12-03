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
    xhr.open('POST', 'http://95.213.249.252/vlad_form_parser', false);
    xhr.send(oData);
    xhr.response; //window.location.href = './form.html'
  }
});