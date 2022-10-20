$(document).ready(function () {
  $('.mobile-nav-icon').click(function (event) {
    $('.mobile-nav-icon').toggleClass('mobile-nav-icon__active');
    $('.mobile-nav-item').toggleClass('mobile-nav-item__active');
    $('.burger__nav').toggleClass('burger__nav__active');
    $('body').toggleClass('lock');
  });
});