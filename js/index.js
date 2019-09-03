// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
const headerImg = document.querySelector('.intro img');
const navLinks = document.querySelectorAll('header nav a');
const body = document.querySelector('body');
const h2 = document.querySelectorAll('h2');
const buttons = document.querySelectorAll('.btn');

// 1. body on scroll behavior
let lastSeenY = 0;
body.style.opacity = 1;
window.addEventListener('scroll', e => {
  let currentY = window.pageYOffset || document.documentElement.scrollTop;
  if (currentY > lastSeenY) {
    body.style.opacity -= 0.01;
  } else {
    body.style.opacity += 0.01;
  }
  lastSeenY = currentY <= 0 ? 0 : currentY;
});

// 2. logo spin
logoHeading.addEventListener('click', e => {
  console.log(logoHeading);
  logoHeading.style.transform = `rotate(180deg)`;
  headerImg.style.transform = `translate3d(100%,0,0)`;
});
