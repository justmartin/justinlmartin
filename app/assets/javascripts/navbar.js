$(document).ready(function(){

	$(".button-collapse").sideNav({
      menuWidth: 250, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });

	$(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.navbar');

    if (scrollPos > 20) {
      navbar.addClass('change-color');
    } else {
      navbar.removeClass('change-color');
    }
  });

});