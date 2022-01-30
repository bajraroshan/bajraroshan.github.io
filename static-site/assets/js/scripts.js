$(document).ready(function () {
  $(".hamburger-icon").click(function () {
    $(this).toggleClass("open");
    $(this).parent().toggleClass("mobilenav-open");
  });

  function revoke(){
    if ($(window).width() < 767) {
      $('nav ul li a').click(function(){
        $(this).parent().parent().siblings(".hamburger-icon").removeClass("open");
        $(this).parents("nav").removeClass("mobilenav-open");
      });
    }
  } 

  revoke();

  $(window).resize(function () {
    revoke();
  });

  jQuery(".slick").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
