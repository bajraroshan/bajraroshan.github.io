$(document).ready(function () {
  $(".hamburger-icon").on( "click", function() {
    $(this).toggleClass("open", 1000);
    $(this).parent().toggleClass("mobilenav-open", 1000);
  });

  function revoke(){
    if ($(window).width() < 767) {
      $('nav ul li a').on( "click", function() {
        $(this).parents("div").removeClass("open", 1000);
        $(this).parents("nav").removeClass("mobilenav-open", 1000);
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
