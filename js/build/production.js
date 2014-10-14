var smallBreakPoint = 640;
var mediumBreakPoint = 768;
$(function() {
  if($(window).width() > mediumBreakPoint){
    $('.gallery').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1
    });
  }

  if($(window).width() < mediumBreakPoint){
    $('.gallery').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
});

/* ==========================================================================
    Main -- Version: 0.4.0 - Updated: 10/1/2014
    ========================================================================== */

// Add classes to first and last li's for every instance
$(function() {
  // Add classes to first and last of each list
  $('li:first-child').addClass('js-first');
  $('li:last-child').addClass('js-last');
});

// Set year
(function($) {

  $.fn.getYear = function() {
    var d = new Date();
    var x = document.getElementById("year");
    x.innerHTML=d.getFullYear();
  }

}(jQuery));
$('.getYear').getYear();

// Open all external links in a new window
$('a[href^="http://"], a[href^="https://"]').attr('target','_blank');

// Make main an element where note supported
document.createElement('main');

/* ==========================================================================
    Nav -- Version: 0.4.0 - Updated: 8/18/2014
    ========================================================================== */

  $(function() {

    var header = $('header')
    , header_height = header.outerHeight()
    , nav = $('nav')
    , nav_height = nav.outerHeight();

  // Scroll to anchored link in Nav
  $('nav a').click(function(){
    // Active Nav links
    $('nav a').parent('li').removeClass('active');
    $(this).parent('li').addClass('active');
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top +1
    }, 500);
    return false;
  });

  if ($(window).scrollTop() >= (header_height - nav_height)) {
    $('nav').addClass('fixed');
    $('nav').css('margin-top','0');
  }

  // Make the Nav sticky
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() >= (header_height - nav_height)) {
      $('nav').addClass('fixed');
      $('nav').css('margin-top','0');
    } else {
      $('nav').removeClass('fixed');
      $('nav').css('margin-top', '-49px');
    }
  });
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
