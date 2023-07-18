let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let open = 0;
menu.onclick = () => {
  if(open == 0) {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbar.style.top = "0px";
    open = 1;
  } else {
    navbar.style.top = "-500px";
    open = 0;
    menu.classList.toggle('bx bx-menu');
  }
}

// window.onscroll = () => {
//   menu.classList.remove('bx-x');
//   navbar.classList.remove('active');
//   // open = 0;
//   // menu.classList.add('bx bx-menu');

// }

const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})
sr.reveal('.text', {delay: 200, origin: 'top'})
sr.reveal('.form-container form', {delay: 800, origin: 'left'})
sr.reveal('.heading', {delay: 400, origin: 'top'})
sr.reveal('.ride-container .box', {delay: 600, origin: 'top'})
sr.reveal('.services-container .box', {delay: 600, origin: 'top'})
sr.reveal('.about-container .box', {delay: 600, origin: 'top'})
sr.reveal('.reviews-container', {delay: 600, origin: 'top'})



