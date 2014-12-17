$(document).ready(function() {

  // theme roller
  var $bigContainer = $('#big-container');
  //var themeIndex = Math.floor(Math.random() * 100) % 7;
  var themeIndex = 0;
  $bigContainer.css('background-image',
    'url(public/images/tagline_background_' + themeIndex + '.jpg)');
});
