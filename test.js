var sidebar = (function(){
	var $sidebarLink = $('.js-sidebar-link');
	var $sidebar = $('.sidebar');

	$sidebarLink.on('click', function(){
	    $sidebar.slideToggle("slow");
	});
});

$(document).ready(function(){
	sidebar();
});