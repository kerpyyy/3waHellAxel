'use strict';

// Affichage de la map interactive Google
document.addEventListener('DOMContentLoaded', function () {
  AOS.init();
});

// Affichage du slider partenaires
  $('.autoplay').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
});


// Affichage du slider principal !
$(window).load(function() {
      $('.flexslider').flexslider();
    });
    $(".flexslider").flexslider({
      animation: "slide",
      slideshowSpeed: 3000,
      animationSpeed: 1000, 
  });



// Affichage du menu burger--------------------

// Variable 
const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

// Fonction choissisant a cache ou afficher le menu
menuButton.addEventListener('click',function(){
  menu.classList.toggle('show-menu');
  menuButton.classList.toggle('close');
});


// Affichage des textes supplémentaires dans la section métier -------------

let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
let d4 = document.getElementById("d4");
let d5 = document.getElementById("d5");
let d6 = document.getElementById("d6");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let p6 = document.getElementById("p6");



d1.addEventListener("mouseover", () => {p1.style.display = "block";});
d1.addEventListener("mouseout", () => {p1.style.display = "none";});

d2.addEventListener("mouseover", () => {p2.style.display = "block";});
d2.addEventListener("mouseout", () => {p2.style.display = "none";});

d3.addEventListener("mouseover", () => {p3.style.display = "block";});
d3.addEventListener("mouseout", () => {p3.style.display = "none";});

d4.addEventListener("mouseover", () => {p4.style.display = "block";});
d4.addEventListener("mouseout", () => {p4.style.display = "none";});

d5.addEventListener("mouseover", () => {p5.style.display = "block";});
d5.addEventListener("mouseout", () => {p5.style.display = "none";});

d6.addEventListener("mouseover", () => {p6.style.display = "block";});
d6.addEventListener("mouseout", () => {p6.style.display = "none";});

