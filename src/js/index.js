$( document ).ready(function() {
  var hamburger = $('.navbar-toggler');
  hamburger.click(function() {
     hamburger.toggleClass('active');
     //return false;
  });
});