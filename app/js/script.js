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
});