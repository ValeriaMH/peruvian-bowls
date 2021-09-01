// A $( document ).ready() block.
$( document ).ready(function() {
    
    $(".circle-button").click(function(){

        $(this).toggleClass('active');
        $(".mobile-menu").fadeToggle();
        $( ".banner" ).slideToggle("fast");

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

  // Typed JS Code 

  document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "Hello" ];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("h6").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 250);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // // start a typewriter animation for a text in the dataText array
      function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined'){
           setTimeout(function() {
             StartTextAnimation(0);
           }, 20000);
        }
      // check if dataText[i] exists
       if (i < dataText[i].length) {
         // text exists! start typewriter animation
        typeWriter(dataText[i], 0, function(){
          // after callback (and whole text has been animated), start next text
          StartTextAnimation(i + 1);
        });
       }
     }
    // // start the text animation
     StartTextAnimation(0);
  });


//  THANK YOU FOOTER


$("#submit").click(function(){
  
    alert("Thank you for suscribing");
  
});