'use strict';

const menuBtn = document.querySelector('.menuBtn');
const menuList = document.querySelector(
  '#navBarAndTopInfo .navBar .navBarList'
);

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('active');
});
