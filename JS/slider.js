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
      animationSpeed: Modernizr.touch ? 100 : 200,
      slideshowSpeed: 2000, 
  });