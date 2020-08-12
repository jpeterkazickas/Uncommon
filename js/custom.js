

// NAVIGATION 
// $(document).ready(function() {
  // Transition effect for navbar 
  // $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
//     if($(this).scrollTop() > 200) { 
//         $('.header').addClass('solid');
//     } else  {
//         $('.header').removeClass('solid');
//     }
//   });
// });

var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("header");
window.addEventListener('scroll', function (e) {
  last_scroll_position = window.scrollY;

  // Scrolling down
  if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
    // header.removeClass('slideDown').addClass('slideUp');
    header.classList.remove("slideDown");
    header.classList.add("slideUp");
    // nav.classList.remove("change");


    // Scrolling up
  } else if (new_scroll_position > last_scroll_position) {
    // header.removeClass('slideUp').addClass('slideDown');
    header.classList.remove("slideUp");
    header.classList.add("slideDown");
  }

  new_scroll_position = last_scroll_position;
});

function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");

	document.getElementById("menu-bg").classList.toggle("change-bg");
}

$(document).ready(function() {
  // Transition effect for navbar 
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 200) { 
        $('.header').addClass('solid');
    } else {
        $('.header').removeClass('solid');
    }
  });
});

$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});



// SLICK SLIDER
$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
});

// SLICK SLIDER
$('.single-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: $('#next'),
  prevArrow: $('#prev'),
  infinite: true,
  speed: 300,
  
});



$('.social').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  loop: true,
  // autoplay: true,
  dots: false,
  // cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
  nextArrow: $('#next'),
  prevArrow: $('#prev'),
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        dots: false,
        slidesToScroll: 1,
        autoplay: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        autoplay: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


