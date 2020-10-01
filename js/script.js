ScrollReveal().reveal('.introduction'), { delay: 500,reset: false };
ScrollReveal().reveal('.works-row-1'), { delay: 500,reset: false };
ScrollReveal().reveal('.works-row-2', { delay: 500,reset: false });
ScrollReveal().reveal('.works-row-3', { delay: 500,reset: false });
ScrollReveal().reveal('.content-sections', { delay: 500,reset: false });


let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    console.log("HI");
  mainNav.classList.toggle('active');
});
