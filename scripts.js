// Mobile menu

$( document ).ready(function() {
  $('.hamburger').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
  });
});





// Animate on scroll - activate
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 300, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false // whether animation should happen only once - while scrolling down

});



// Testimonial Slider

$('.testimonial-slider-container').slick({
  
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: false,
    accesibility: true,
    dots: true,
    fade: false,
    infinite: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    slidesToShow: 1,
    slidesToScroll: 1
    
  });

// Why Us Slider

$('.whyus-slider-container').slick({
  
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: false,
    accesibility: true,
    dots: true,
    fade: false,
    infinite: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    slidesToShow: 1,
    slidesToScroll: 1
    
  });

  // Accordion FAQ

  var allPanels = $('.accordion > dd').hide();

	$('.accordion > dt').click(function() {
		allPanels.slideUp();

    $(this).filter('.open').removeClass('open').addClass('closing')
    $('.accordion > dt ').removeClass('open');
    $(this).not(".closing").addClass('open').next().slideDown();
    $('.accordion > dt').removeClass('closing');
    
    return false;
	});




//  THANK YOU FOOTER


$("#submit").click(function(){
  
    alert("Thank you for suscribing");
  
});


// Pop up Gallery
lightGallery(document.getElementById('lightgallery'), {
  speed: 500,
  download: false
  
});
