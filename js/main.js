'use strict';

const menuBtn = document.querySelector('.menuBtn');
const menuList = document.querySelector(
  '#navBarAndTopInfo .navBar .navBarList'
);

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('active');
});

const frontImgsHeight = document
  .querySelector('#frontImgs')
  .getBoundingClientRect().height;
// console.log(frontImgsHeight);

const toTopBtn = document.querySelector('.toTopBtn');

toTopBtn.addEventListener('click', () => {
  const home = document.querySelector('#navBarAndTopInfo');
  if (window.scrollY > frontImgsHeight)
    home.scrollIntoView({ behavior: 'smooth' });
});

console.log(`frontImgsHeight! : ${frontImgsHeight}`);
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if (window.scrollY > frontImgsHeight) toTopBtn.classList.add('visible');
  else toTopBtn.classList.remove('visible');
});
