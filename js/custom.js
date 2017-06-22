
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
  new WOW({ mobile: true }).init();

  });

document.addEventListener("DOMContentLoaded", function(event) {

  function ground() {

    var tl = new TimelineMax({
      repeat: -1
    });

    tl.to(".about-thumb", 20, {
        backgroundPosition: "1301px 0px",
        force3D:true,
        rotation:0.01,
        z:0.01,
        autoRound:false,
        ease: Linear.easeNone
      });

    return tl;
  }

  
  var masterTL = new TimelineMax({
    repeat: -1
  });
  
  // window load event makes sure image is 
// loaded before running animation
window.onload = function() {
  
  masterTL
  .add(ground(),0)
  .timeScale(0.7)
  .progress(1).progress(0)
  .play();

};
  
});