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

const clock = document.querySelector('.tel');
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
