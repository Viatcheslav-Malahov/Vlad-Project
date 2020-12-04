"use strict";

var formInfo = {};
var inputValues = document.querySelectorAll('.form_elem');
document.querySelector('.form__item_btn').addEventListener('click', function (event) {
  event.preventDefault();
  formInfo['Email'] = document.querySelector('#email__inp').value;
  inputValues.forEach(function (element) {
    if (element.value == '') {
      element.classList.add('redBorder');
      document.querySelector('.RedAllert').classList.remove('hidden');
      return false;
    } else {
      formInfo[element.name] = element.value;
      element.classList.remove('redBorder');
    }
  });

  function isNotEmpty(a) {
    return a.value != '';
  }

  var y = 0;

  for (var x = 0; x < inputValues.length; x++) {
    if (isNotEmpty(inputValues[x]) == false) {
      y++;
    }
  }

  if (y == 0) {
    var xhr = new XMLHttpRequest();
    var oData = new FormData();
    oData.append('form', JSON.stringify(formInfo));
    xhr.open('POST', 'http://127.0.0.1:5500/', false);
    xhr.send(oData);
    window.location.href = '../test.html';
  }
});
document.querySelector('.RedAllert').querySelector('i').addEventListener('click', function () {
  document.querySelector('.RedAllert').classList.add('hidden');
});