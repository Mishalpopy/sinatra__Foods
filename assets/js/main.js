


(function ($) {
    "use strict";

///////////////////////////////////////////////////////
// Preloader
$(".preloader").delay(300).fadeOut("slow");

///////////////////////////////////////////////////////
// Button Hover
$( ".common-btn_inner" ).mouseenter(function(e) {
  var parentOffset = $(this).offset(); 
 
  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".common-btn_circle").css({"left": relX, "top": relY });
  $(this).prev(".common-btn_circle").removeClass("desplode-circle");
  $(this).prev(".common-btn_circle").addClass("explode-circle");

});

$( ".common-btn_inner" ).mouseleave(function(e) {

    var parentOffset = $(this).offset(); 

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".common-btn_circle").css({"left": relX, "top": relY });
    $(this).prev(".common-btn_circle").removeClass("explode-circle");
    $(this).prev(".common-btn_circle").addClass("desplode-circle");

});

// Button Hover End


///////////////////////////////////////////////////////
// Sticky Menu
$(window).on( 'scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $(".header-menu-area").addClass("sticky");
    } else {
        $(".header-menu-area").removeClass("sticky");
    }
});
// Sticky Menu End


///////////////////////////////////////////////////////
// Magnific Popup gallery
$('.popup-gallery').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    gallery: {
        enabled: true
    },
    type: 'image'
    // other options
});

// Magnific Popup gallery End


///////////////////////////////////////////////////////       
// Mobile menu
$('.hamburger').on( 'click', function (event) {
    $(this).toggleClass('h-active');
    $('.main-nav').toggleClass('slidenav');
});
$('.header-home .main-nav ul li  a').on( 'click', function (event) {
    $('.hamburger').removeClass('h-active');
    $('.main-nav').removeClass('slidenav');
});

$(".main-nav .fl").on('click', function(event) {
    var $fl = $(this);
    $(this).parent().siblings().find('.sub-menu').slideUp();
    $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");
    if($fl.hasClass('flaticon-plus')){
        $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
    }else{
        $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
    }
    $fl.next(".sub-menu").slideToggle();
});
// Mobile menu End


///////////////////////////////////////////////////////
/*Swiper Brand Slide*/
var brandSlider = new Swiper('.brand-carrousel', {
  slidesPerView: 6,
  spaceBetween: 24,
  loop:true,
  speed: 2500,
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 6
    },
    1400: {
      slidesPerView: 6
    }
  }
});

$(".brand-carrousel").hover(function() {
  (this).swiper.autoplay.stop();
}, function() {
  (this).swiper.autoplay.start();
});

/*Swiper Brand Slide End*/

/*Swiper Brand Slide*/
var brandSlider = new Swiper('.brand-carrousel-two', {
  slidesPerView: 6,
  spaceBetween: 0,
  loop:true,
  speed: 3500,
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 6
    },
    1400: {
      slidesPerView: 6
    }
  }
});

$(".brand-carrousel-two").hover(function() {
  (this).swiper.autoplay.stop();
}, function() {
  (this).swiper.autoplay.start();
});

/*Swiper Brand Slide End*/


///////////////////////////////////////////////////////
/*Showcase Slide*/

var showcaseSlider = new Swiper('.showcase-slider', {
  slidesPerView: 4,
  spaceBetween: 24,
  loop:true,
  speed: 2500,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    },
    1400: {
      slidesPerView:4
    }
  },
  pagination: {
    el: ".showcase-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".showcase-button-next",
    prevEl: ".showcase-button-prev",
  },
});

/*Showcase Slide End*/


///////////////////////////////////////////////////////
/*Hero Slide*/

var heroSlider = new Swiper('.hero-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop:true,
  speed: 2500,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".hero-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".hero-button-next",
    prevEl: ".hero-button-prev",
  },
});

/*Hero Slide End*/


///////////////////////////////////////////////////////
// Cta Slider

var cta_slider = new Swiper(".cta-slider", {
  loop: true,
  freemode: true,
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  allowTouchMove: false,
  speed: 2000,
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 5,
    },
    1900: {
      slidesPerView: 8,
    },
  },
  autoplay: {
    delay: 1,
    disableOnInteraction: true,
  },
});

// Cta Slider End

///////////////////////////////////////////////////////
/* Video Player hero */
jQuery(window).on('load', function($) {
  let player_hero = document.getElementById('player-hero'),
    play_hero = document.getElementById('play-hero');

  play_hero &&
    play_hero.addEventListener('click', function() {
      if (player_hero.paused) {
        player_hero.play();
      } else if (!player_hero.paused) {
        player_hero.pause();
      }
    });
});

var pause_video = document.querySelector('.hero-pause-icon');
var play_video = document.querySelector('.hero-play-icon');
var btn_wrap = document.querySelector('.hero-video-icon-wrap');

btn_wrap &&
  btn_wrap.addEventListener('click', function() {
    if (play_video.classList.contains('active')) {
      play_video.classList.remove('active');
      pause_video.classList.add('active');
    } else {
      pause_video.classList.remove('active');
      play_video.classList.add('active');
    }
  });

/* Video Player hero End */


///////////////////////////////////////////////////////
/* Video Player Chooses */

jQuery(window).on( 'load', function($){
  let player = document.getElementById("player");
  play && play.addEventListener("click",function(){
    if(player.paused){
      player.play();
    } else if(!player.paused){
      player.pause();
    }
  });
});

var pause = document.querySelector('.pause');
var play = document.querySelector('.play');
var btn = document.querySelector('.video-tap');

btn && btn.addEventListener('click', () => {
    if( play.classList.contains("active") )
    {
        play.classList.remove("active");
        pause.classList.add("active");
    }
    else
    {
        pause.classList.remove("active");
        play.classList.add("active");
    }
})

/* Video Player Chooses end */


///////////////////////////////////////////////////////
/*Testimonial Slide*/

var testimonialSlider = new Swiper('.testimonial-slider', {
  slidesPerView: 1,
  spaceBetween: 24,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  loop:true,
  speed: 1500,
  pagination: {
    el: ".testimonial-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".testimonial-button-next",
    prevEl: ".testimonial-button-prev",
  },
});

/*Testimonial Slide End*/



///////////////////////////////////////////////////////
// Contact Form Start

// Get the form.
var form = $('#contact-form');

// Get the messages div.
var formMessages = $('.form-message');

// Set up an event listener for the contact form.
$(form).on( 'submit', function(e) {
  // Stop the browser from submitting the form.
  e.preventDefault();

  // Serialize the form data.
  var formData = $(form).serialize();

  // Submit the form using AJAX.
  $.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData
  })
  .done(function(response) {
    // Make sure that the formMessages div has the 'success' class.
    $(formMessages).removeClass('error');
    $(formMessages).addClass('success');

    // Set the message text.
    $(formMessages).text(response);

    // Clear the form.
    $('#contact-form input,#contact-form textarea').val('');
  })
  .fail(function(data) {
    // Make sure that the formMessages div has the 'error' class.
    $(formMessages).removeClass('success');
    $(formMessages).addClass('error');

    // Set the message text.
    if (data.responseText !== '') {
      $(formMessages).text(data.responseText);
    } else {
      $(formMessages).text('Oops! An error occurred. Message could not be sent.');
    }
  });
});
// Contact Form End

///////////////////////////////////////////////////////
// Bottom to top start
$(document).ready(function () {
  $(window).on('scroll', (function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll-top').fadeIn();
    } else {
      $('#scroll-top').fadeOut();
    }
  }));
  $('#scroll-top').on( 'click', function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
// Bottom to top End


///////////////////////////////////////////////////////
// Odometer Counter
$(".counter-item").each(function () {
  $(this).isInViewport(function (status) {
  if (status === "entered") {
      for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
      var el = document.querySelectorAll('.odometer')[i];
      el.innerHTML = el.getAttribute("data-odometer-final");
    }
  }
  });
});


///////////////////////////////////////////////////////


// GSAP Title Animation

// Style 1
let word_come = document.querySelectorAll(".animation-word")
word_come.forEach((word_come) => {
  let split_word_come = new SplitText(word_come, { type: "chars words", position: "absolute" })
  gsap.from(split_word_come.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 });
});

// Style 2
let word_come_long = document.querySelectorAll(".animation-word-long")
word_come_long.forEach((word_come_long) => {
  let split_word_come_long = new SplitText(word_come_long, { type: "chars words", position: "absolute" })
  gsap.from(split_word_come_long.words, { duration: 1.5, x: 50, autoAlpha: 0, stagger: 0.05 });
});


// Style 3
let animation_down = gsap.timeline();

animation_down.from(".animation-down", {
  duration: 1,
  x: 300,
  autoAlpha: 0,
  ease: "elastic.out(1, 1)",
  stagger: {
    each: 0.75,
    amount: 0.5
  }
}, "+=0.25");


// Style 4 Zoom out

let splitTitleLines = gsap.utils.toArray(".title-anim");

splitTitleLines.forEach(splitTextLine => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: splitTextLine,
      start: 'top 90%',
      end: 'bottom 60%',
      scrub: false,
      markers: false,
      toggleActions: 'play none none none'
    }
  });

  const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
  gsap.set(splitTextLine, { perspective: 400 });
  itemSplitted.split({ type: "lines" })
  tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
});

///////////////////////////////////////////////////////
// GSAP Text Animation
var mySplitText = new SplitText(".quote", {type:"chars, words"}),
    tl = new TimelineLite(),
    numChars = mySplitText.chars.length;

for(var i = 0; i < numChars; i++){
  tl.from(mySplitText.chars[i], .5, {opacity:0}, Math.random() * 2);
}

//Text Animation
let splitTextLines = gsap.utils.toArray(".text-anim");

splitTextLines.forEach(splitTextLine => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: splitTextLine,
      start: 'top 90%',
      duration: 2,
      end: 'bottom 60%',
      scrub: false,
      markers: false,
      toggleActions: 'play none none none'
    }
  });

  const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
  gsap.set(splitTextLine, { perspective: 400 });
  itemSplitted.split({ type: "lines" })
  tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
});

///////////////////////////////////////////////////////
// Image reveal on hover
const items = document.querySelectorAll('.choose-list-info')

items && items.forEach((el) => {
  const image = el.querySelector('.h-img')
  
  el && el.addEventListener('mouseenter', (e) => {
    gsap.to(image, { autoAlpha: 1 })
  })
  
  el && el.addEventListener('mouseleave', (e) => {
    gsap.to(image, { autoAlpha: 0 })
  })
  
  el && el.addEventListener('mousemove', (e) => {
    gsap.set(image, { x: e.offsetX - 200 })
  })
})

///////////////////////////////////////////////////////
// GSAP Register

window.gsap.registerPlugin(
  window.ScrollTrigger,
  window.ScrollSmoother,
  window.TweenMax
);


// Hero Animation

let mark = document.querySelector(" .title-left")
let eting = document.querySelector(".title-right")
let hero__text_animation = document.querySelector(".hero__text-animation")
let HomeDigital = gsap.timeline()


let split_creatives = new SplitText(mark, { type: "chars" })
let split_solutions = new SplitText(eting, { type: "chars" })
let split_text_animation = new SplitText(hero__text_animation, { type: "chars words" })

HomeDigital.from(split_creatives.chars, { duration: 2, x: 100, autoAlpha: 0, stagger: 0.2 });
HomeDigital.from(split_solutions.chars, { duration: 1, x: 100, autoAlpha: 0, stagger: 0.1 }, "-=1");
HomeDigital.from(split_text_animation.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");

// Hero Animation End



/////////////////////////////////////////////////////
// About Animation
let about__items_3 = gsap.utils.toArray(".about-content")
let about__items_heading = gsap.utils.toArray(".about-content .about-title")
let about__items_content = gsap.utils.toArray(".about-content ul")

about__items_3.forEach((about_item, i) => {
  gsap.set([about__items_heading[i], about__items_content[i]], {
    x: -30,
    opacity: 0,
  })

  let about3_timeline = gsap.timeline({
    scrollTrigger: {
      trigger: about_item,
      start: "top center+=200",
      markers: false
    }
  })

  about3_timeline.to(about__items_heading[i], {
    x: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 1.5,
    stagger: {
      each: 0.2
    }
  })
  about3_timeline.to(about__items_content[i], {
    x: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 1.5,
    stagger: {
      each: 0.2
    }
  }, "-=1")
})


// About Animation End


/////////////////////////////////////////////////////
// Magnate Animation
var magnets = document.querySelectorAll('.apart-magnetic')
var strength = 50

magnets.forEach( (magnet) => {
  magnet.addEventListener('mousemove', moveMagnet );
  magnet.addEventListener('mouseout', function(event) {
    TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
  } );
});

function moveMagnet(event) {
  var magnetButton = event.currentTarget
  var bounding = magnetButton.getBoundingClientRect()

  //console.log(magnetButton, bounding)

  TweenMax.to( magnetButton, 1, {
    x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
    y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
    ease: Power4.easeOut
  })
}

// Magnate Animation End


/////////////////////////////////////////////////////

let zoom_items = gsap.utils.toArray(".zoom_animation .zoom_item_single");

zoom_items.forEach((zoom_item, i) => {
  gsap.set(zoom_item, { opacity: 0, y: 30, scale: 0.5 });

  let zoom_timeline = gsap.timeline({
    scrollTrigger: {
      trigger: zoom_item,
      start: "top center+=200",
      markers: false
    }
  })

  zoom_timeline.to(zoom_item, {
    y: 0,
    opacity: 1,
    scale: 1,
    ease: "power2.out",
    duration: 1,
    stagger: {
      each: 0.2,
      delay: 0.5 // add a 0.5 second delay between each item animation
    }
  })
});

// Zoom In Animation End


/////////////////////////////////////////////////////
//  Animation Fade Left

const fadeElements = document.querySelectorAll(".fade_left");

fadeElements.forEach((element, index) => {
  gsap.set(element, { x: -50, opacity: 0 });
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top center+=300"
    },
    x: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 1,
    stagger: {
      each: 0.2,
      from: index * 0.2 // stagger delay based on element index
    }
  });
});


// two
let about_items = gsap.utils.toArray(".animation-content .anim-item");

about_items.forEach((about_item, i) => {
  gsap.set(about_item, {
    x: -30,
    opacity: 0,
  })

  let about_timeline = gsap.timeline({
    scrollTrigger: {
      trigger: about_item,
      start: "top center+=200",
      markers: false
    }
  })

  about_timeline.to(about_item, {
    x: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 1.5,
    stagger: {
      each: 0.2,
      from: "start",
      onComplete: () => {
        about_timeline.duration(2); // Increase the duration for the next item
      }
    }
  })
});

//  Animation Fade Left End

/////////////////////////////////////////////////////
// CURSOR
var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
        css: {
        left: posX - 12,
        top: posY - 12
        }
    });

    TweenMax.set(cursor, {
        css: {
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
//circle
$(".link").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".link").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});   
// CURSOR End
    
/////////////////////////////////////////////////////

// Logo animation
gsap.to(".trigger-hero-1",{
  duration: 1, y: 600, rotation: 180,  ease: "linear",
  scrollTrigger: {
    trigger: ".trigger-hero-1",
    markers: false,
    start: "top center",
    end: "top 100px",
    // toggleActions: "play complete pause reverse"
    scrub: 1
  }
})

gsap.to(".trigger-hero-2",{
  duration: 1, x: innerWidth * 1, rotation: -360,  ease: "linear",
  scrollTrigger: {
    trigger: ".trigger-hero-2",
    markers: false,
    start: "top center",
    end: "top 100px",
    // toggleActions: "play complete pause reverse"
    scrub: 1,
  }
})

gsap.to(".trigger-hero-3",{
  duration: 1, y: innerWidth * 1, rotation: -360,  ease: "linear",
  scrollTrigger: {
    trigger: ".trigger-hero-3",
    markers: false,
    start: "top center",
    end: "top 100px",
    // toggleActions: "play complete pause reverse"
    scrub: 1,
  }
})
// Logo animation End

/* Tooltip*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
/* Tooltip End */



}(jQuery)); 