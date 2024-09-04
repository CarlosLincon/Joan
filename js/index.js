
// index.js
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const nav = document.querySelector('nav');

open.addEventListener('click', () => {
  container.classList.add('show-nav');
  nav.classList.add('show-nav'); // Adiciona a classe show-nav ao nav
});

close.addEventListener('click', () => {
  container.classList.remove('show-nav');
  nav.classList.remove('show-nav'); // Remove a classe show-nav do nav
});

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}
