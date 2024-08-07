$(function () {


    $('.main_visual_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });


    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/vjGIY_GyAz4',
        containment: '.main_movie',
        showControls: false,
        playOnlyIfVisible: true,
    });

    let sw = true;

    $('.main_movie .switch').on('click', function () {
        $(this).toggleClass('on');
        if (sw) {
            $('#bgndVideo').YTPPause();
        } else {
            $('#bgndVideo').YTPPlay();
        }
        sw = !sw;
    });

    $('.main_product_slide').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
    });

    $('.main_product .arrows .prev').on('click', function () {
        $('.main_product_slide').slick('slickPrev')
    });

    $('.main_product .arrows .next').on('click', function () {
        $('.main_product_slide').slick('slickNext')
    });


    $('.main_event_slide').slick({
        slidesToShow: 5,
        centerMode: true,
        centerPadding: 0,
        arrows: false,
    });

    $('.main_event .arrows .prev').on('click', function () {
        $('.main_event_slide').slick('slickPrev')
    });

    $('.main_event .arrows .next').on('click', function () {
        $('.main_event_slide').slick('slickNext')
    });

    $('.main_customer .news .news_menu button').on('click', function () {
        let idx = $(this).parent().index();//0,1
        $('.main_customer .news .news_content>ul')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');

        $(this).parent().addClass('on').siblings().removeClass('on')
    });

    $('.to_top button').on('click', function () {
        $('html,boby').animate({ scrollTop: 0 }, 600)
    })

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 800) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $('#f_lnk').on('change', function () {
        let lnk = $(this).val();
        console.log(lnk);

        if (lnk) {
            window.open(lnk)
        }
    })


    AOS.init();


});