$(document).ready(function() {

  // Header
  $(window).on('scroll', function() {
		if($(document).scrollTop() >= 300) {
			$('.home.header-container').css("top", "0");
		} else {
			$('.home.header-container').css("top", "-100%");
		}

		if($(document).scrollTop() >= 100) {
			$('.header-container').addClass('shrinked');
		} else {
			$('.header-container').removeClass('shrinked');
		}
	});
	
	// Toggle Navigation
  $('#nav-trigger').on('click', function () {
    $('#nav').fadeToggle();
		$(this).toggleClass('change');
		if($(this).hasClass('change')) {
			$('html').css('overflow', 'hidden')
		} else {
			$('html').css('overflow', 'auto')
		}
  });

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