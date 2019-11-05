// Your code goes here
const busPic = document.querySelector('.funBus');
busPic.addEventListener('mouseenter', () => {
  busPic.style.transform = 'scale(2.2)';
  busPic.style.transition = 'scale(1)';
});
busPic.addEventListener('mouseleave', () => {
  busPic.style.transform = 'scale(1)';
});

const changeImage = document.querySelector('.adventure');
changeImage.addEventListener('dbclick', () => {
  changeImage.src = 'img/krisztian-korhetz-ktwQEA0mRsg-unsplash.jpg';
});

window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  if (scrolled === scrollable) {
    alert('Dont forget to sign up!!');
  }
});
const title = document.querySelector('h2');
title.addEventListener('click', event => {
  title.style.color = 'red';
  title.style.transition = 'color 0.5s';
  alert('hello');
  event.stopPropagation()
};);

const input = document.querySelector('input');
input.addEventListener('select', logSelection);

document.querySelector('nav').addEventListener('click', event => {
  event.preventDefault();
});
const textBox = document.querySelector('input');
textBox.addEventListener('focus', event => {
  event.target.style.background = 'blue';
});
function logSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  log.textContent = `You selected:${input}`;
}

const allButtons = document.querySelectorAll('.btn');

allButtons.forEach(buttonz => {
  buttonz.addEventListener('mouseover', event => {
    buttonz.style.transform = 'scale(1.5)';
    buttonz.style.transition = 'tranform 0.5s';
  });
  buttonz.addEventListener('mouseout', event => {
    buttonz.style.transform = 'scale(1.0)';
    buttonz.style.transition = 'transform 0.5s';
  });
});
