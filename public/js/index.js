$(document).ready(function() {

  // theme roller
  var $bigContainer = $('#big-container');
  var themeIndex = Math.floor(Math.random() * 100) % 7;
  $bigContainer.css('background-image',
    'url(public/images/backgrounds/tagline_background_' + themeIndex + '.jpg)');
  $(".owl-carousel").owlCarousel({singleItem: true, navigation: true, autoPlay: true, stopOnHover: true, slideSpeed: 600});
});
