'use strict';

const menuBtn = document.querySelector('.menuBtn'); // html의 class="menuBtn"을 선택
const menuList = document.querySelector(
  '#navBarAndTopInfo .navBar .navBarList'
);
// console.log(menuList);

menuBtn.addEventListener('click', () => {
  // 클릭하는 이벤트를 기다림!!
  menuList.classList.toggle('active'); // 클릭되면 active란 클래스를 토글링해줘!!
  // 토글링은 있으면 없애고 없으면 만들어주는 것!
});

const frontImgsHeight = document
  .querySelector('#frontImgs')
  .getBoundingClientRect().height; // id="frontImgs" 박스의 높이를 가져옴!
// console.log(frontImgsHeight);

const toTopBtn = document.querySelector('.toTopBtn');

toTopBtn.addEventListener('click', () => {
  // toTopBtn을 클릭하면!
  const home = document.querySelector('#navBarAndTopInfo');
  if (window.scrollY > frontImgsHeight)
    home.scrollIntoView({ behavior: 'smooth' }); // 맨 위로 이동!!
});

// console.log(`frontImgsHeight! : ${frontImgsHeight}`);
document.addEventListener('scroll', () => {
  // 스크롤하는 이벤트를 감지!
  // console.log(window.scrollY);
  if (window.scrollY > frontImgsHeight) toTopBtn.classList.add('visible');
  // 스크롤이 frontImgsHeight보다 많이 되었으면 홈으로 가는 버튼이 보이게 함!
  else toTopBtn.classList.remove('visible'); // 아니면 안보이게 함!
});

const frontImgs = document.querySelector('#frontImgs');
// console.log(frontImgs);
const frontImg = ['first', 'second', 'third'];

frontImg.forEach((img) => {
  const div = document.createElement('div');
  div.setAttribute('class', 'img');

  const image = document.createElement('img');
  image.setAttribute('src', `imgs/frontImgs/${img}.jpg`);
  image.setAttribute('alt', img);

  div.appendChild(image);
  frontImgs.appendChild(div);
});
