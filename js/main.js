$(document).ready(function() {

	$('.quicklinks a').click(function(){
		$(this).each(function(){
			$('.quicklinks a').removeClass('active');
		});
		$(this).addClass('active');
	});

	// Parallax 
	$(function($) {
    $window = $(window);

    $('*[data-type="parallax"]').each(function(){

        var $bgobj = $(this);

        $(window).scroll(function() {

            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50% '+ yPos + 'px';

            $bgobj.css({ backgroundPosition: coords });

        });
    });
	});


});