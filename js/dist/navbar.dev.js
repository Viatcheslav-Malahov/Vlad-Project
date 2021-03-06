"use strict";

var NavBar = document.querySelector('.nav__bar');
var NavBarItem = NavBar.querySelector('.fas');
NavBar.addEventListener('click', function () {
  if (NavBarItem.classList.contains('fa-bars')) {
    NavBarItem.classList.add('fa-times');
    NavBarItem.classList.remove('fa-bars');
    document.querySelector('.nav_links_bar').classList.remove('hidden');
  } else {
    NavBarItem.classList.add('fa-bars');
    NavBarItem.classList.remove('fa-times');
    document.querySelector('.nav_links_bar').classList.add('hidden');
  }
});