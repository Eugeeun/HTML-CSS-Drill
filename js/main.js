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

// console.log(`frontImgsHeight! : ${frontImgsHeight}`);
document.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  if (window.scrollY > frontImgsHeight) toTopBtn.classList.add('visible');
  else toTopBtn.classList.remove('visible');
});

const frontImgs = document.querySelector('#frontImgs');
// console.log(frontImgs);
const frontImg = ['first', 'second', 'third'];
let HTML = '';

for (let img in frontImg) {
  // console.log(img);
  // console.log(frontImg[img]);
  HTML += `<div class="img">
        <img
          src="./imgs/frontImgs/${frontImg[img]}.jpg"
          alt="${frontImg[img]}"
        />
      </div>
    `;
}
frontImgs.innerHTML = HTML;
