 jQuery(window).on('load', function () {
     jQuery('.preloader').fadeOut();
     jQuery('.loader').delay(1350).fadeOut('slow');
     jQuery('body').delay(1350).css({
         'overflow': 'visible'
     });
 })

 jQuery('document').ready(function () {
     jQuery('.search').click(function () {
         jQuery('.search-popup').slideDown();
     });
     jQuery('.cross').click(function () {
         jQuery('.search-popup').slideUp();
     });
     $('.toggle-icon').click(function(){
        $('.menu-item').slideToggle();
    });
    $('.i11').click(function(){
        $('.dropdown-menu').slideToggle();
    });
    $('.dropdown-menu li span').click(function(){
        $('.submenu').slideToggle();
    });
 });

 jQuery(document).ready(function () {
     var jQueryowl = jQuery('#main-carousel');

     jQueryowl.children().each(function (index) {
         jQuery(this).attr('data-position', index); // NB: .attr() instead of .data()
     });

     jQueryowl.owlCarousel({
         center: true,
         loop: true,
         margin: 0,
         autoplay: false,
         autoplayTimeout: 5000,
         dots: false,
         nav: true,
         navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
         mouseDrag: false,
         responsive: {
             0: {
                 items: 1,
                 stagePadding: 60,
             },
             600: {
                 items: 1,
                 stagePadding: 100,
             },
             1000: {
                 items: 1,
                 stagePadding: 400,
             },

         }
     });
 });
 // nav fixed 
 jQuery("document").ready(function () {
     jQuery(window).scroll(function () {
         if (jQuery(window).scrollTop() > 300) {
             jQuery('.main-menu').addClass('fixed-top');
         } else {
             jQuery('.main-menu').removeClass('fixed-top');
         }
     });
 });

 //testimonial carousel
 jQuery('document').ready(function () {
     jQuery('.testimonial .owl-carousel').owlCarousel({
         loop: true,
         margin: 10,
         nav: true,
         navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
         dots: false,
         smartSpeed: 2000,
         items: 1
     });
 });
 //counter up
 jQuery("document").ready(function () {
     jQuery('.counter').countUp({
         delay: 10,
         time: 2000
     });
 });


 // Scroll top button //

 jQuery("document").ready(function () {
     jQuery(window).scroll(function () {
         if (jQuery(this).scrollTop() > 200) {
             jQuery(".scroll-top").fadeIn();
         } else {
             jQuery(".scroll-top").fadeOut();
         }
     });
     jQuery(".scroll-top").click(function () {
         jQuery("html,body").animate({
             scrollTop: 0
         }, 700);
     });
 });

 $('.i11').click(function () {
     $('.drp2').slideToggle();
 });
 $('.d11').click(function () {
     $('.drp22').slideToggle();
 });


 wow = new WOW({
     animateClass: 'animated',
     offset: 100,
     callback: function (box) {
         console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
     }
 });
 wow.init();

