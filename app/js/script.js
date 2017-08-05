$(document).ready(function(){
    //home-slider
    var home_slider = new Swiper('.home_slider_swiper', {
        nextButton: '.home_next',
        prevButton: '.home_prev',
    });
    
    //tabs-slider
    (function() { 
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
	})();
});