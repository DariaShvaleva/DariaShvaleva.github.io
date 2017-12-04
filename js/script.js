$(document).ready(function(){
  var posTop = $('.menu').offset().top;
        $(window).scroll(function(){
                var top = $(document).scrollTop();
                var w = $(window).width();
                if ((top > posTop) && (w >= 1200)) {
                        $('.menu').addClass('floating');
                } else {
                        $('.menu').removeClass('floating');
                }
        });

        $('a.scroll').click(function (event) {
            event.preventDefault();
            var id  = $(this).attr('href');
            var scrollTo = $(id).offset().top;
            $('html, body').animate({scrollTop: scrollTo}, 700);
          });

  $('.slider').slick({
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    dots: true,
    infinite: true
  });

});
