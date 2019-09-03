// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
const headerImg = document.querySelector('.intro img');
const navLinks = document.querySelectorAll('header nav a');
const body = document.querySelector('body');
const h2 = document.querySelectorAll('h2');
const buttons = document.querySelectorAll('.btn');
const paragraphs = document.querySelectorAll('p');

const randomInt = (min, max) => Math.floor(Math.random() * max) + min;

// 1. scroll
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

// 2. click
logoHeading.addEventListener('click', e => {
  console.log(logoHeading);
  logoHeading.style.transform = `rotate(180deg)`;
  headerImg.style.transform = `translate3d(100%,0,0)`;
});

// 3. keydown
body.addEventListener('keydown', e => {
  if (e.keyCode === 27) {
    h2.forEach(el => {
      el.style.transform = `scale(.25)`;
    });
  }
});

// 4. mouseover
buttons.forEach(button => {
  button.addEventListener('mouseover', e => {
    button.style.backgroundColor = 'salmon';
  });
});

// 5. resize
window.addEventListener('resize', e => {
  body.style.backgroundColor = `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
});

// 6. double-click
navLinks.forEach(link => {
  link.addEventListener('dblclick', e => {
    e.preventDefault();
    TweenMax.to(link, 1, { opacity: 0.5, rotation: 45 });
  });
});

// 7. copy
const getSelectionText = () => {
  let text = '';
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != 'Control') {
    text = document.selection.createRange().text;
  }
  return text;
};
paragraphs.forEach(p => {
  p.addEventListener('copy', e => {
    console.log(e.target);
    const text = getSelectionText();
    window.alert(
      `you copied this text:
      ${text}`
    );
  });
});

// 8. keyup
document.addEventListener('keyup', e => {
  if (e.keyCode === 67) {
    paragraphs.forEach(p => (p.style.color = `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`));
  }
});

// 9. keypress
document.addEventListener('keypress', e => {
  if (e.keyCode === 32) {
    paragraphs.forEach(p => (p.style.backgroundColor = `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`));
  }
});

// 10.
document.addEventListener('DOMContentLoaded', e => {
  window.alert('The DOM has loaded');
});

// 10.
body.addEventListener('mousemove', e => {
  let x = e.pageX;
  let y = e.pageY;
  body.style.transform = `rotate3d(1,1,1,${(x / y) * 2}deg)`;
});
