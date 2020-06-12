$(function() {
    var introSlider = $("#introSlider");


    /* Show and hide nav mobile */
    var navToggle = $('#toggle');
    var nav = $('#nav');

    navToggle.on('click', function() {
        $(this).toggleClass('active');

        nav.toggleClass('active');
    });


    /* Show and hide search mobile */
    var searchShow = $('#searchShow');
    var searchClose = $('#searchClose');
    var search = $('#search');

    searchShow.on('click', function() {

        if( navToggle.hasClass('active') && nav.hasClass('active') ) {
            navToggle.removeClass('active');
            nav.removeClass('active');
        }

        search.addClass('active');
    });

    searchClose.on('click', function() {
        search.removeClass('active');
    });


    /* Intro slider */
    introSlider.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });


    /* Products slider */
    var productsSliders = $(".productsSlider");

    productsSliders.slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 566,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    /* Accordion footer */
    $('[data-collapse]').on('click', function() {
        $('[data-collapse]').removeClass('active');

        $(this).addClass('active');
    });



    /* Back-Top */
    var backTop = $('#backTop');
    var scrollPos = $(window).scrollTop();
    var introEndPos = introSlider.innerHeight() + introSlider.offset().top;

    function checkScrollForBackTop( introEndPos, scrollPos ) {
        if( scrollPos > introEndPos ) {
            backTop.addClass('show');
        } else {
            backTop.removeClass('show');
        }
    }

    checkScrollForBackTop( introEndPos, scrollPos );

    $(window).on('scroll resize', function() {
        introEndPos = introSlider.innerHeight() + introSlider.offset().top;
        scrollPos = $(window).scrollTop();

        checkScrollForBackTop( introEndPos, scrollPos );
    });


    backTop.on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });
});
