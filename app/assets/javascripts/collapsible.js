$(document).ready(function() {

	var isCollapsibleActive = document.getElementsByClassName('active');

	if (isCollapsibleActive.length > 0) {
		$('.collapsible-header').addClass('active-collapsible');
	} else {
    	$('.collapsible-header').removeClass('active-collapsible');
    };

});