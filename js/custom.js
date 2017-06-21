
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


$(document).ready(function() {

  /* Portfolio masonry
  
  
  /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#about').parallax("100%", 0.3);
    $('#download').parallax("100%", 0.1);
    $('#portfolio').parallax("100%", 0.2);
    $('#contact').parallax("100%", 0.3);
  }
  initParallax();


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

