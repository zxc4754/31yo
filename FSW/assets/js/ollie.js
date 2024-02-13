/*!
=========================================================
* Ollie Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// portfolio carousel
$('#owl-portfolio').owlCarousel({
    margin:30,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false
        }
    }
});

// testmonial carousel
$('#owl-testmonial').owlCarousel({
    center: true,
    items:1,
    loop:true,
    nav: true,
    dots: false
})
let split = new SplitText("#title");

gsap.from("#woman", {
  scrollTrigger: {
    scrub: true,
  },
  y: 50,
});

gsap.from("#leftplant", {
  scrollTrigger: {
    scrub: true,
  },
  x: -150,
});

gsap.from("#rightplant", {
  scrollTrigger: {
    scrub: true,
  },
  x: 150,
});

gsap.from("#ball", {
  scrollTrigger: {
    scrub: true,
  },
  x: -200,
});

gsap.from("#lifebuoy", {
  scrollTrigger: {
    scrub: true,
  },
  x: 200,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".parallax",
      start: "top 50%",
      end: "bottom top",
      toggleActions: "restart none none reset",
    },
  })
  .from(split.chars, {
    yPercent: -150,
    stagger: 0.05,
    duration: 0.7,
    ease: "back",
  })
  .from(split.chars, { opacity: 0, delay: 0.05, stagger: 0.05, duration: 0.2 }, 0);
 
 
 
  window.onload = function() {
    var iframeContainer = document.getElementById("Comment");
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.menti.com/al8tipzu55x1";
    iframeContainer.appendChild(iframe);
};