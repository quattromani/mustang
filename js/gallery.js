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
