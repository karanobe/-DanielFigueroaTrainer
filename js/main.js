/*  ---------------------------------------------------
  Template Name: Gym
  Description:  Gym Fitness HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas-open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    //Masonary
    $('.gallery').masonry({
        itemSelector: '.gs-item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hs-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false
    });

    /*------------------
        Team Slider
    --------------------*/
    $(".ts-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 3000,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".ts_slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Image Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Barfiller
    --------------------*/
    $('#bar1').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar2').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar3').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });

    $('.table-controls ul li').on('click', function () {
        var tsfilter = $(this).data('tsfilter');
        $('.table-controls ul li').removeClass('active');
        $(this).addClass('active');

        if (tsfilter == 'all') {
            $('.class-timetable').removeClass('filtering');
            $('.ts-meta').removeClass('show');
        } else {
            $('.class-timetable').addClass('filtering');
        }
        $('.ts-meta').each(function () {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });

    $( "#contact" ).on( "submit", function( event ) {
        event.preventDefault();
        $('#submit').hide()
        $('.submitting').show()


        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const age = document.getElementById('age').value;
        const goals = document.getElementById('goals').value;

        const botpoison = new Botpoison({
        publicKey: "pk_5635f6ea-7c6f-42dc-ad11-b79d1f4a75b1",
        });
        botpoison.challenge().then(({ solution }) => {
        axios
          .post("https://submit-form.com/FvGRJSBE2", {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            age: age,
            goals: goals,
            _botpoison: solution,
          })
          .then(function (response) {
            $('#contact').fadeOut(400, function () {
                $('.success .firstName').html(firstName)
                $('.success').fadeIn();
            });
          })
          .catch(function (response) {
            console.error(response);
            $('#contact').fadeOut(400, function () {
                $('.failure .firstName').html(firstName)
                $('.failure').fadeIn();
            });            
          });
        });      
    });

    $( "#lead" ).on( "submit", function( event ) {
        event.preventDefault();
        $('#submit').hide()
        $('.submitting').show()


        const email = document.getElementById('email').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const height = document.getElementById('height').value;
        const age = document.getElementById('age').value;
        const weight = document.getElementById('weight').value;
        const goals = document.getElementById('goals').value;
        const hurdles = document.getElementById('hurdles').value;
        const weightFluctuation = document.getElementById('weightFluctuation').value;
        const homeLife = document.getElementById('homeLife').value;
        const serious = document.getElementById('serious').value;
        const importance = document.getElementById('importance').value;
        const occupation = document.getElementById('occupation').value;
        const referral = document.getElementById('referral').value;
        const phone = document.getElementById('phone').value;

        const botpoison = new Botpoison({
        publicKey: "pk_5635f6ea-7c6f-42dc-ad11-b79d1f4a75b1",
        });
        botpoison.challenge().then(({ solution }) => {
        axios
          .post("https://submit-form.com/FvGRJSBE2", {
            email: email,
            phone: phone,
            first_name: firstName,
            last_name: lastName,
            age: age,
            height: height,
            weight: weight,
            goals: goals,
            hurdles: hurdles,
            weight_fluctuation: weightFluctuation,
            home_life: homeLife,
            how_serious: serious,
            importance: importance,
            occupation: occupation,
            referral: referral,
            _botpoison: solution,
          })
          .then(function (response) {
            $('#lead').fadeOut(400, function () {
                $('.success .firstName').html(firstName)
                $('.success').fadeIn();
            });
          })
          .catch(function (response) {
            console.error(response);
            $('#lead').fadeOut(400, function () {
                $('.failure .firstName').html(firstName)
                $('.failure').fadeIn();
            });            
          });
        });      
    });

})(jQuery);