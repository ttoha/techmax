jQuery(document).ready(function ($) {
    $('.top-menu').responsiveTabs();
    $('.hamburger').on("click", function(){
        $(this).toggleClass('active');
    })
    $('.big-slider').slick({
        prevArrow: '<span class="slick-prev" aria-label="Previous" type="button"><i></i></span>',
        nextArrow: '<span class="slick-next" aria-label="Next" type="button"><i></i></span>',
        autoplay: true
    });
    $('.product-slider').slick({
        prevArrow: '<span class="slick-prev" aria-label="Previous" type="button"><i></i></span>',
        nextArrow: '<span class="slick-next" aria-label="Next" type="button"><i></i></span>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: "unslick"
            }
        ]
    });
    $('.product-item').on('mouseover', function(){
        var par = $(this).parent('.product-item-wrap').outerHeight();
        $(this).parent('.product-item-wrap').css('height', par);
        $(this).css('position','absolute');
        $(this).find('.product-info').show();
    });
    $('.product-item').on('mouseout', function(){
        $(this).css('position','relative');
    });
    $('#registration').click(function(e){
        e.preventDefault();
        $('#modal-login').modal('hide');
        setTimeout(function(){
            $('#modal-registration').modal('show');
        }, 400);
    });
    $('[data-toggle="tooltip"]').tooltip();
    $('.input-wrap input').val("");
    $('.input-wrap input').on('focus', function(){
        $(this).parent('.input-wrap').find('.fake-input').addClass('empty');
    })
    $('.input-wrap input').on('blur', function(){
        var inval = $(this).val();
        if(inval=='') {
            $(this).parent('.input-wrap').find('.fake-input').removeClass('empty');
        }
    })
});
