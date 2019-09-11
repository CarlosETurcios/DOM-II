//Your code goes here
const buttonc = document.querySelector('.logo-heading');
buttonc.addEventListener('mouseover', event => {
  console.log(event);
  buttonc.style.transform = 'scale(2.2)';
  buttonc.style.transition = 'transform 0.5';
  buttonc.addEventListener('mouseout', event => {
    buttonc.style.transform = 'scale(1.0)';
    buttonc.style.transition = 'transform 0.5s';
  });
});

const title = document.querySelector('h2');
title.addEventListener('click', event => {
  title.style.color = 'red';
  title.style.transition = 'color 0.5s';
});
window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  if (scrolled === scrollable) {
    alert('Dont forget to sign up!!');
  }
});

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

const card = document.querySelector('.content-pick');

card.addEventListener('dblclick', event => {
  card.classList.toggle('large');
});

let scale = 1;
const el = document.querySelector('.intro');
el.onwheel = zoom;
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(0.125, scale), 4);
  el.addEventListener('wheel', zoom);
}
function logSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  log.textContent = `You selected:${input}`;
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);

document.querySelector('nav').addEventListener('click', event => {
  event.preventDefault();
});
const textBox = document.querySelector('input');
textBox.addEventListener('focus', event => {
  event.target.style.background = 'blue';
});
