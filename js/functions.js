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
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
              }
            }
        ]
    });

 $('.slider-gallery').slick({
     infinite:false,
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     asNavFor: '.slider-thumb'
 });
 $('.slider-thumb').slick({
     prevArrow: '<span class="slick-prev" aria-label="Previous" type="button"><i></i></span>',
     nextArrow: '<span class="slick-next" aria-label="Next" type="button"><i></i></span>',
     infinite:false,
     slidesToShow: 4,
     slidesToScroll: 1,
     asNavFor: '.slider-gallery',
     focusOnSelect: true,
     vertical: true
 });


    $(".totop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.basket').addClass('fixed');
        } else {
            $('.basket').removeClass('fixed');
        }
    });
    $('select.custom-select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');
        $listItems.first().addClass('liactive');
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $list.find('.liactive').removeClass('liactive');
            $(this).addClass('liactive');
            $this.val($(this).attr('rel'));
            $list.hide();
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
    $('.filter-item .collapse').collapse('show');
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
    var inmax = jQuery("#input#minCost").attr('value');
    var inmax = jQuery("#input#minCost").attr('value');
    $("#slider").slider({
        min: 0,
        max: 200000,
        values: [20000,150000],
        range: true,
        stop: function(event, ui) {
            $("input#minCost").val($("#slider").slider("values",0));
            $("input#maxCost").val($("#slider").slider("values",1));

        },
        slide: function(event, ui){
            $("input#minCost").val($("#slider").slider("values",0));
            $("input#maxCost").val($("#slider").slider("values",1));
        }
    });

    $("input#minCost").change(function(){

        var value1=$("input#minCost").val();
        var value2=$("input#maxCost").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#minCost").val(value1);
        }
        $("#slider").slider("values",0,value1);
    });


    $("input#maxCost").change(function(){

        var value1=$("input#minCost").val();
        var value2=$("input#maxCost").val();

        if (value2 > 150000) { value2 = 150000; $("input#maxCost").val(150000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#maxCost").val(value2);
        }
        $("#slider").slider("values",1,value2);
    });

	$('input.numb').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;

		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;

		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);

		if(!/\d/.test(keyChar))	return false;
	});
    $('.keep-open').on({
        "shown.bs.dropdown": function () {
            $(this).attr('closable', false);
        },
        "click": function () {},
        "hide.bs.dropdown": function () {
            return $(this).attr('closable') == 'true';
        }
    });

    $('.keep-open .sidebar-title').on({
        "click": function () {
            $(this).parent().attr('closable', true);
        }
    });
});
