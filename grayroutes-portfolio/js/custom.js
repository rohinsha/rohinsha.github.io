
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){

    $('.wrap-loader').fadeOut(1000); // set duration in brackets
});


$(document).ready(function() {



  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });


// Setting up the Variables
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");
var anchor = document.getElementsByClassName("anchor-a");



//setting up the listener
bars.addEventListener("click", barClicked);
 for(var i=0; i<anchor.length; i++)
  {
    anchor[i].addEventListener("click",onanchor);
  }
//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');

}

function onanchor() {
nav.style.visibility = 'hidden';
  bars.classList.toggle('active');
  nav.style.visibility = 'visible';
  nav.classList.toggle('visible');

}

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); 