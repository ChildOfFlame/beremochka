$(document).ready(function(){
    //home-slider
    var home_slider = new Swiper('.home_slider_swiper', {
        nextButton: '.home_next',
        prevButton: '.home_prev',
    });
    
    //tabs-slider
    var slider_init = function() {
        var count_slide = $('.tabs_slider_wrap li.active').length;
        var loop_mode = false;

        if(count_slide > 4){
            loop_mode=true;
        }
        $('.tabs_slider_wrap li.active > .swiper-container').swiper({
            speed: 400,
            slidesPerView: 4,
            loopAdditionalSlides:0,
            loop:loop_mode,
            nextButton: '.tabs_arrow_slider li.active > .swiper-button-next',
            prevButton: '.tabs_arrow_slider li.active > .swiper-button-prev',
            spaceBetween: 10,
            breakpoints: {
                500: {
                  slidesPerView: 1,
                },
                690: {
                  slidesPerView: 2,
                },
                910: {
                  slidesPerView: 3,
                }
            },
        });   
    }
    $('.tabs li').on('click', function() {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
		$('.tabs_arrow_slider li:eq(' + index + ')').addClass('active').siblings().removeClass('active');
        $('.tabs_slider_wrap li:eq(' + index + ')').addClass('active').siblings().removeClass('active');
        slider_init();
    });
    
    slider_init();
    
    //new-events-slider
    var new_events_slider = function() {
        var count_slide = $('.new_events .swiper-container').length;
        var loop_mode = false;

        if(count_slide > 4){
            loop_mode=true;
        }
        $('.new_events .swiper-container').swiper({
            speed: 400,
            slidesPerView: 4,
            loopAdditionalSlides:0,
            loop:loop_mode,
            nextButton: '.arrow_slider .swiper-button-next',
            prevButton: '.arrow_slider .swiper-button-prev',
            spaceBetween: 10,
        });
    }
    
    new_events_slider();
    
    //popular-section-tabs
    $('.popular_section .tabs li').on('click', function() {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.blocks_section li:eq(' + index + ')').addClass('active').siblings().removeClass('active');
    });
    
    //popular-section-slider
    var popular_section_slider = new Swiper('.popular_section_slider', {
        speed: 800,
        setWrapperSize: true,
        slidesPerView: 8,
        slidesPerGroup: 8,
        loop: true,
        nextButton: '.popular_section_next',
        prevButton: '.popular_section_prev',
    });
    //tabs on left menu
    $(document).on("click",".left_block .left_menu a",function(e){
        e.preventDefault();
        if(!$(this).hasClass("active")){
            $(this).addClass("active")
                   .parent()
                   .siblings()
                   .find("a")
                   .removeClass("active");
            $("."+$(this).data("target")).addClass("active")
                                         .siblings()
                                         .removeClass("active");
        }

    });
    //tabs in personal hisory_order
    $(document).on("click",".list_history tr.main_line",function(e){
        e.preventDefault();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).next()
                   .find(".drop_container")
                   .slideUp(300)
                   .parent()
                   .slideUp(300);
        }
        else{
            $(this).addClass("active");
            console.log($(this).next());
            $(this).next()
                   .find(".drop_cell")
                   .show()
                   .find(".drop_container")
                   .slideDown(300);
        }
    });
    $(document).on("click",".subtitle .orange_border_dashed",function(){
        $('#callback').arcticmodal();
    });
    $(document).on("click","#entry_btn",function(){
        $('#entry').arcticmodal();
    });
    
    //slider card_product
    var productTop = new Swiper('.slider-product-top');
    var productThumbs = new Swiper('.slider-product-thumbs', {
        nextButton: '.swiper-button-next.arrow_card_product',
        prevButton: '.swiper-button-prev.arrow_card_product',
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        spaceBetween: 35,
    });
    productTop.params.control = productThumbs;
    productThumbs.params.control = productTop;
    
    //card_product_tabs 
        $('.card_product_tabs li').on('click', function() {
        var index = $(this).index();
            console.log(index);
        $(this).addClass('active').siblings().removeClass('active');
		$('.card_product_tabs > .description:eq(' + index + ')').addClass('active').siblings().removeClass('active');
    });
});