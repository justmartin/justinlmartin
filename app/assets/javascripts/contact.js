$(document).ready(function() {

	$('.contact-image').hover(function() {
		$(this).addClass('contact-image-opacity');
	},
		function() {
		$(this).removeClass('contact-image-opacity');
	});

});