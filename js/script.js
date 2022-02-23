// Intro website
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('display-none');
  }, 1000);
});

// Navigasi auto respon
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Menu hamburger
function menuHumberger() {
  const menuHumberger = document.querySelector('.menuToggle');
  const navigation = document.querySelector('.navigation');

  menuHumberger.classList.toggle('active');
  navigation.classList.toggle('active');
}

// FItur Accordion
const accordion = document.getElementsByClassName('contentBox');
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}