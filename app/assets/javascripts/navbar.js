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
        linkColor = $('.link-color')

    if (scrollPos > 20) {
      navbar.addClass('change-color');
      linkColor.addClass('change-text-color');
    } else {
      navbar.removeClass('change-color');
      linkColor.removeClass('change-text-color');
    }
  });

});