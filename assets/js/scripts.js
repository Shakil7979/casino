$(document).ready(function(){
	// Mobile Menu
	$('.bars_btn, .eki_btn').click(function (e) {
		e.preventDefault();  
	
		$('.menu_drop').slideDown(1000);  
	});

	$('.close_menu').click(function (e) {
		e.preventDefault();   
		$('.menu_drop').slideUp(1000);  
	});

	// Banner Carousel
	$('.game_carousel').owlCarousel({
		items:4.5,
		loop:true,
		nav:false,
		dots:false,
		autoplay:true,
		margin: 0,
		responsive:{
			0:{
				items:2.5, 
			},
			400:{
				items:2.5, 
			},
			600:{
				items:3.5,  
			},
			1000:{
				items:4.5,
			}
		}
	});

	$('.live_carousel_main').owlCarousel({
		items: 5,
		loop:true,
		nav:true,
		dots:false,
		autoplay:true,
		navText: ["<img src=''>","<img src='assets/images/live/arrow.png'>"],
		margin: 20,
		responsive:{
			0:{
				items:2, 
			},
			400:{
				items:3, 
			},
			600:{
				items:4, 
				margin: 5,
			},
			1000:{
				items:5,
				nav:true,
				loop:false
			}
		}
	});





});