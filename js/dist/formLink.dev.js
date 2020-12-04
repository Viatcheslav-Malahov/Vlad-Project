"use strict";

document.querySelector('.form__link').addEventListener('click', function (event) {
  event.preventDefault();
  var emailInp = document.querySelector('.email__inp');

  if (emailInp.value == '') {
    alert('Enter email first plz');
    return false;
  } else {
    document.getElementById('form__email').submit();
  }
});