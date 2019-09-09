$(document).ready(function(){
	var bar = $(".navbar_contain");
	var list = $(".modal_content");
	var close = $(".fa-close");

	bar.click(function(){
		list.fadeIn();
	});
	
	close.click(function(){
		list.fadeOut();
	})
	list.click(function(){
		list.fadeOut();
	})
	
	$('.parallax-window').parallax({imageSrc: 'Images/Homepage.jpg'});
	
	 $(".fa-angle-down").click(function(){
		var $element = $(".thir").offset().top;
		//alert($element);
		$("html,body").animate({
			scrollTop : $element
		}, 900);
	});
	
	//SLIDE IN EFFECT//
	var $animation_elements = $('.module');
	var $window = $(window);

	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);

	  $.each($animation_elements, function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);

		//check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) &&
		  (element_top_position <= window_bottom_position)) {
		  $element.addClass('in-view');
		} else {
		  $element.removeClass('in-view');
		}
	  });
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');
    //SLIDE EFFECTS ENDS//
	
	//Header Effect
	// Hide Header on on scroll down
	var previousScroll = 0,
	headerOrgOffset = $('header').offset().top;

	$('#header-wrap').height($('header').height());

	$(window).scroll(function() {
		var currentScroll = $(this).scrollTop();
// 		console.log(currentScroll + " and " + previousScroll + " and " + headerOrgOffset);
		if(currentScroll > headerOrgOffset) {
			if (currentScroll > previousScroll) {
				$('header').slideUp();
			} else {
				$('header').fadeIn();
				$('header').addClass('fixed');
			}
		} else {
			 $('header').removeClass('fixed');
		}
		previousScroll = currentScroll;
	});
	
	
});




	