$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');

	// make 'projects-slider' visible in Chrome ('hack')
	if($('.projects-slider').length) {
		setTimeout(function () {
			$('.projects-slider__slider-item').css('height', '540px');
			$('.news-slider__slider-item').css('height', '100%');
		}, 30);
	}
	if($('.partners-slider').length) {
		setTimeout(function () {
			$('.partners-slider__slider-item').css('height', '100%');
		}, 30);
	}
	if($('.news-slider').length) {
		setTimeout(function () {
			$('.news-slider__slider-item').css('height', '100%');
		}, 30);
	}

	if ( $('.slideToLeft').length ) {
		$('.slideToLeft').removeClass('slideToLeft');
	}

	$('.main-screen-bg-5').show(900);

	if ($('#invest-graph').length) {
		Highcharts.chart('invest-graph', {
			title: {
				text: '%',
				style:{
					color: 'transparent',
					fontSize: '2.6rem',
					fontFamily: 'GothamPro',
					fontWeight: 'bold'
				}
			},
			subtitle: {
				text: ''
			},
			chart: {
				backgroundColor: "transparent",
			},
			yAxis: {
				gridLineWidth: 0,
				lineWidth: 1,
				gridLineColor: 'transparent',
				title: {
					enabled: true,
					text: '%',
					style:{
						color: '#fff',
						fontSize: '2.6rem',
						fontFamily: 'GothamPro',
						fontWeight: '900'
					},
					align: 'high',
		            offset: 0,
		            rotation: 0,
                    y: -25,
                    x: 12
				},
				labels: {
					style: {
						fontFamily: 'GothamPro',
						fontSize: '2.2rem',
						lineHeight: '2.2rem',
						fontWeight: '900',
						color: '#fff'
					},
					useHTML: true
				},
				min: 0,
				max: 40,
				tickColor: '#fff',
				tickInterval: 5,
				tickLength: 0,
				tickWidth: 0,
				tickPositions: [3, 5, 10, 15, 20, 25, 30, 35, 37.5]
			},
			xAxis: {
				title: {
					enabled: true,
					text: '2017',
					style:{
						color: '#fff',
						fontSize: '3rem',
						fontFamily: 'GothamPro',
						fontWeight: '900',
						// left: '50%',
						position: 'relative'
					},
					align: 'low',
		            offset: 0,
		            rotation: 0,
		            useHTML: true
                    // y: -25,
                    // x: 800
				},
				labels: {
					rotation: -90,
					y: 25,
					style: {
						fontFamily: 'GothamPro',
						fontSize: '1.9rem',
						lineHeight: '1.9rem',
						fontWeight: '900',
						color: '#fff',
						textTransform: 'uppercase',
					},
					useHTML: true
				},
				gridLineWidth: 0,
				tickColor: '#fff',
				tickLength: 0,
				tickWidth: 0,
				categories: ['ЯНВ', 'ФЕВ', 'МАР', 'АПР', 'МАЙ', 'ИЮН', 'ИЮЛ', 'АВГ', 'СЕН', 'ОКТ', 'НОЯ', 'ДЕК']
			},
            tooltip:{
                useHTML:true
            },
			legend: {
				enabled: false,
			},
			credits: {
				enabled: false
			},
			plotOptions: {
				series: {
					lineWidth: 4,
					color: '#fff',
					animation: {
						duration: 2000,
						easing: "easeOutSine"
					},
					label: {
						connectorAllowed: false
					},
					marker: {
						radius: 5,
						symbol: "circle"
					}
				}
			},
			series: [{
				name: 'Sirius',
				data: [29,30,30,29.5,29,31,31,32.3,32.3,32.3,31,30]
			}, {
				name: 'Домашние деньги',
				data: [19,19,19,19,19,17,17,17,17,17,17,17]
			}, {
				name: 'Сбербанк',
				data: [8,8,7.5,7.2,7.2,7.2,7.2,7.2,7.2,7.2,7.2,7.2]
			}, {
				name: 'Сбербанк',
				data: [4,6,8,10,10,11,11.5,9,11.5,16,12,12.5]
			}],
			responsive: {
				rules: [{
					condition: {
					// maxWidth: 1070
				},
				chartOptions: {
					legend: {
						layout: 'horizontal',
						align: 'center',
						verticalAlign: 'bottom'
					}
				}
			}]
		},
		tooltip: {
			style: {
				fontFamily: 'GothamPro',
                fontSize: '3rem',
                lineHeight: '3rem',
                color: '#FFF',
                fontWeight: '900',
			},
            backgroundColor:'transparent',
            borderWidth: 0,
            shadow: false,
            pointFormat: '<b>{point.y}</b>',
            valueSuffix: ' %',
            useHTML: true
		}
	});
	}
});
/* viewport width */
function viewport(){
	var e = window,
	a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){

	$('.soc-btns__item').click(function(e) {
		e.preventDefault();
	});
    
    /*if ($('.parallax-layer').length) {
        jQuery('.parallax-layer').parallax({
            xorigin:       0.5,     // 0-1 - Sets default alignment. Only has effect when parallax values are something other than 1 (or true, or '100%')
	    	yorigin:       0.5,     //
	    	decay:         0.66,    // 0-1 (0 instant, 1 forever) - Sets rate of decay curve for catching up with target mouse position
	    	frameDuration: 2,    
        });
    }
*/
    /*var timeout;
    $('body').mousemove(function(e){
      if(timeout) clearTimeout(timeout);
      setTimeout(callParallax.bind(null, e), 200);

    });

    function callParallax(e){
      parallaxIt(e, '.parallax-layer', -100); 
      parallaxIt(e, '.parallax-layer2', -80); 
        parallaxIt(e, '.parallax-layer3', -60); 
        parallaxIt(e, '.parallax-layer4', -30);
        parallaxIt(e, '.parallax-layer5', -20);
    }

    function parallaxIt(e, target, movement){
      var $this = $('body');
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      TweenMax.to(target, 1, {
        x: (relX - $this.width()/2) / $this.width() * movement,
        y: (relY - $this.height()/2) / $this.height() * movement,
        ease: Power2.easeOut
      })
    };*/
    
    jQuery(document).ready(function(e){
       var left = 0,
       top = 0,
       element = jQuery('body.inner-page'),
       offset =  { left: element.offset().left, top: element.offset().top };
       element.bind('mousemove', function(e){
          left = (e.pageX-offset.left);
          top = (e.pageY-offset.top);
          jQuery('.parallax-layer_inner').css({
              'margin-left': '-'+(0.05*left)+'px','margin-top': '-'+(0.05*top)+'px','margin-bottom': '-'+(0.05*top)+'px'

          });
          
        });
    });
    jQuery(document).ready(function(e){
       var left = 0,
       top = 0,
       element = jQuery('body.guarantees-page'),
       offset =  { left: element.offset().left, top: element.offset().top };
       element.bind('mousemove', function(e){
          left = (e.pageX-offset.left);
          top = (e.pageY-offset.top);
          jQuery('.parallax-layer_inner').css({
              'margin-left': '-'+(0.05*left)+'px','margin-top': '-'+(0.05*top)+'px','margin-bottom': '-'+(0.05*top)+'px'

          });
          
        });
    });
    
    jQuery(document).ready(function(e){
       var left = 0,
       top = 0,
       element = jQuery('body.inner-page'),
       offset =  { left: element.offset().left, top: element.offset().top };
       element.bind('mousemove', function(e){
          left = (e.pageX-offset.left);
          top = (e.pageY-offset.top);
          jQuery('.parallax-layer_charity').css({
              'left': '-'+(0.05*left)+'px', 'top': '-'+(0.05*top)+'px'

          });
          
        });
    });
    
    jQuery(document).ready(function(e){
       var left = 0,
       top = 0,
       element = jQuery('.parallax-layer').parent().parent(),
       offset =  { left: element.offset().left, top: element.offset().top };
       element.bind('mousemove', function(e){
          left = (e.pageX-offset.left);
          top = (e.pageY-offset.top);
          jQuery('.parallax-layer').css({
              'margin-left': '-'+(0.05*left)+'px','margin-right': '-'+(0.05*left)+'px','margin-top': '-'+(0.05*top)+'px','margin-bottom': +(0.05*top)+'px'

          });
          
        });
    });
    jQuery(document).ready(function(e){
       var left = 0,
       top = 0,
       element = jQuery('.parallax-layer_char').parent().parent(),
       offset =  { left: element.offset().left, top: element.offset().top };
       element.bind('mousemove', function(e){
          left = (e.pageX-offset.left);
          top = (e.pageY-offset.top);
          jQuery('.parallax-layer_char').css({
              'left': '-'+(0.05*left)+'px', 'top': '-'+(0.05*top)+'px'
          });
          
        });
    });
    
    $('.single-field__btn').click(function () {
		$('.thanks-popup').fadeIn(600);
		setTimeout(function() {
			$('.thanks-popup').fadeOut(600);
		}, 2000);
	});
	
	$('.js-get-consult').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		// if ($(this).hasClass('js-contact-info')) {
		// 	$('.write-to-us-popup__title').text('Написать нам');
		// } else {
		// 	$('.write-to-us-popup__title').text('Получить консультацию');
		// }
		$('.write-to-us-popup_1').fadeIn(600);
	});

	$('.js-write').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		// if ($(this).hasClass('js-contact-info')) {
		// 	$('.write-to-us-popup__title').text('Написать нам');
		// } else {
		// 	$('.write-to-us-popup__title').text('Получить консультацию');
		// }
		$('.write-to-us-popup_2').fadeIn(600);
	});

	/* fullpage.js */

	$('#fullpage').fullpage({
		loopHorizontal: false,
		scrollHorizontally: true,
        navigation:true,
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
			$('.js-open-menu').removeClass('pulsation');
				// if(nextSlideIndex == 2 || nextSlideIndex == 3 || nextSlideIndex == 6) {
					if(nextSlideIndex == 2 || nextSlideIndex == 3 || nextSlideIndex == 6 || nextSlideIndex == 8) {
						$('.header').addClass('dark-section');
						$('.footer').addClass('dark-section');
					} else {
						$('.header').removeClass('dark-section');
						$('.footer').removeClass('dark-section');
					}

					if(nextSlideIndex == 4) {
						if (projectsSlide % 2) {
							$('.header').addClass('dark-section');
							$('.footer').addClass('dark-section');
						} else {
							$('.header').removeClass('dark-section');
							$('.footer').removeClass('dark-section');
						}
					};
                    
				},
				afterSlideLoad: function () {
					$('.js-open-menu').addClass('pulsation');
				}
			});

	var slideCur = $('#fullpage .section');
	$(slideCur).mousewheel(function (event, delta) {
		if (delta < 0) {
			$.fn.fullpage.moveSlideRight();

		} else if (delta > 0) {
			$.fn.fullpage.moveSlideLeft();
		};
	});

	/* fullpage.js */

	$('.confidential-tabs__list-item').click(function () {
		var titleName = $(this).find('a').text();
		$('.confidential-tabs__title').text(titleName);
	});

	/* registration form */

	$('.personal-account').click(function () {
		$('.authorization-box').fadeIn();
	});

	$('.authorization-box').click(function (event) {
		var target = event.target;
		if(target.closest('.authorization')) {
			return;
		}
		$('.authorization-box').fadeOut();
	});

	$('body').click(function (event) {
		var target = event.target;
		if(target.closest('.sign-in-chat')) {
			return;
		}
		$('.sign-in-chat').fadeOut();
	});
    

	$('body').click(function (event) {
		var target = event.target;
		if(target.closest('.write-to-us-popup__window')) {
			return;
		}
		$('.write-to-us-popup').fadeOut();
	});

	$('.write-to-us-popup__close').click(function() {
		$('.write-to-us-popup').fadeOut();
        $('.authorization-box').fadeOut();
	});
	/* registration form */ 

	/* more points */ 

	$('.js-more-points').click(function (e) {
		e.preventDefault();
		$(this).closest('.extend-wrap').find('.hidden-point').slideDown(600).css('display', 'inline-block');
		$(this).hide(600);
		$('.go-top').removeClass('go-top_hidden').fadeIn(300);
		$('.hide-border').removeClass('hide-border');
	});

	/* more points */ 

	/* chat-box */ 
    
    $(document).click(function(e){
		if ($(e.target).parents().filter('.chat-convers:visible').length != 1) {
			$('.chat-convers').hide();
		}
	});

	$('.js-chat-box__link').click(function (e) {
		e.stopPropagation();
		$('.sign-in-chat').fadeIn(300);
	});
    
	$('.sign-in-chat__btn').click(function (e) {
		e.preventDefault();
		$('.chat-convers').delay(10).fadeIn(300);
        $('.sign-in-chat').fadeOut(300);
	});

	$('.chat-convers__close').click(function (e) {
		e.stopPropagation();
		$('.chat-convers, .sign-in-chat').hide();
	});
    
   
    
    
	/* chat-box */ 

	if ( $('.go-top').length ) {
		//Check to see if the window is top if not then display button
		$(window).scroll(function(){
			if ($('.go-top').hasClass('go-top_hidden')) {
				console.log('return');
				return;
			}
			if ($(this).scrollTop() > 400) {
				$('.go-top').fadeIn();
			} else {
				$('.go-top').fadeOut();
			}
		});
		
		//Click event to scroll to top
		$('.go-top').click(function(){
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});
	}

	if ( $('.confidential-tabs').length ) {

		$(".confidential-tabs__content-box .confidential-tabs__content-item").not(":first").hide();
		$(".confidential-tabs__list .confidential-tabs__list-item").click(function() {
			$(".confidential-tabs__list .confidential-tabs__list-item").removeClass("active").eq($(this).index()).addClass("active");
			$(".confidential-tabs__content-box .confidential-tabs__content-item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");

	}
	
	if ( $('.authorization__tabs-box').length ) {

		$(".authorization__tab-content-box .authorization__tab-content").not(":first").hide();
		$(".authorization__tabs .authorization__tab").click(function() {
			$(".authorization__tabs .authorization__tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".authorization__tab-content-box .authorization__tab-content").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");

	}

	$('.play-btn').click(function () {
		if($(window).width() >= 768) {
			$('.main-screen .animated-overlay').addClass('video-mode');
			$('.content-box__col').addClass('video-mode-hide');
		}
		$('.main-video').addClass('showed');
		$('.js-close-video').delay(2000).fadeIn(1000);
		
		setTimeout(function () {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
                elem.play();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
                elem.play();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
                elem.play();
            }
		}, 500);
	});
    
    $(window).keyup(function(e) {
        if( e.keyCode === 27 ) {
            $('.main-video').removeClass('showed');
        }
    });


	$('.js-close-video').click(function () {
		if (elem.exitFullscreen) {
			elem.exitFullscreen();
			elem.pause();
		} else if (elem.mozExitFullscreen) {
			elem.mozExitFullscreen();
			elem.pause();
		} else if (elem.webkitExitFullscreen) {
			elem.webkitExitFullscreen();
			elem.pause();
		}
	})

	/* placeholder*/
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function(){ $(this).attr('placeholder', '');});
		$(this).focusout(function(){
			$(this).attr('placeholder', placeholder);
		});
	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'),
		$('.main-nav-list').slideToggle();
		return false;
	});


	// menu, button animation

	function menuBtnAnimation(target) {
		var dotCount = $(target);
		var timeout = 0;
		for(i = 0;  i < dotCount.length; i++) {
			setTimeout(
				(function (N){
					return function() {
						$(dotCount[N]).removeClass('blink');
						$(dotCount[N]).prev().addClass('blink');
						if(N + 1 == dotCount.length) {
							setTimeout(function () {
								$(dotCount[N]).addClass('blink');
							}, 140)
						}
					}
				})(i)
				,
				timeout
				);
			timeout += 140;
		}
	}

	setInterval(function () {
		menuBtnAnimation('.menu-btn .menu-btn__decore-el');
	}, 4000);

	setInterval(function () {
		menuBtnAnimation('.full-menu .menu-btn__decore-el');
	}, 4000);
    
    var widNav = $('.js-open-menu').width();
	$('.js-open-menu').click(function () {		
        $(this).addClass('opened-button');		
		$('.full-menu').addClass('opened');		
		if($('.guarantees-page').length) {
			$('.guarantees-page').addClass('opened-menu');
		}
	});

	$('.js-close-menu').click(function () {        
        $('.js-open-menu').removeClass('opened-button');
		$('.full-menu').removeClass('opened');		
		if($('.guarantees-page').length) {
			$('.guarantees-page').removeClass('opened-menu');
		}
	});

	$(".js-contact-us").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#contact-form").offset().top
	    }, 1000);
	});


	// share btn

	$('.icon-share').click(function (e) {
		e.preventDefault();
	});


	// captcha closing

	$('.js-captch-close').click(function () {
		$('.box-capch').removeClass('opened');
	});


	// header styling after page scrolling

	$(window).scroll(function(){
	   if ( $(window).scrollTop() > 0 ){
	   		$('header').addClass('scrolled');
	   } else {
	   		$('header').removeClass('scrolled');
	   }
	});

	/* components */

	/*

	if($('.styled').length) {
		$('.styled').styler();
	};

	*/

	/* components */

	if($('.wow').length && $(window).width() > 1024) {
		new WOW().init();
	}

	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"y",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};

	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 0,
			nextSpeed: 600,
			prevSpeed: 600
		});
	};

	if($('.fancybox-gallery').length) {
		$('.fancybox-gallery').fancybox({
			wrapCSS: 'fancybox-gallery-style',
			margin: [40, 40, 40, 40],
			padding: 0,
			maxWidth: 958
		});
	};

	if($('.slick-about-us').length) {
		$('.slick-about-us').on('init', function(event, slick, currentSlide, nextSlide){
			var $status = $('.js-slide-num-2');
			var text = (slick.currentSlide + 1) + '/' + (slick.slideCount);
			$status.text(text);
			$('.status-line').addClass('loadbar');
		});
		$('.slick-about-us').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.status-line').removeClass('loadbar');
		});
		$('.slick-about-us').on('afterChange', function(event, slick, currentSlide, nextSlide){
			var $status = $('.js-slide-num-2');
			var text = (slick.currentSlide + 1) + '/' + (slick.slideCount);
			$status.text(text);
			$('.status-line').addClass('loadbar');
		});
		$('.slick-about-us').slick({
			dots: false,
			infinite: true,
			speed: 700,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: false,
			autoplay: false,
			autoplaySpeed: 12000,
			pauseOnFocus: false,
			pauseOnHover: false,
			responsive: [
			{
				breakpoint: 767,
				settings: {
					adaptiveHeight: true
				}
			}
			]
		});
	};

// 

	if ($('.js-team-slideshow').length) {
	    var $teamSlider = $('.js-team-slideshow');
	    var storeSlideshow = {
	        initialSlide: 0,
	        indexSlideClick: 0,
	        onClick: false
	    };
	    $teamSlider.on('init', function(event, slick, currentSlide, nextSlide) {
	        mouseWheel($teamSlider);
	        setTimeout(function() {
	            storeSlideshow.initialSlide = $('.slick-current').index();
	        }, 500);
	    });
	    $teamSlider.slick({
	        arrows: false,
	        infinite: false,
	        speed: 700,
	        centerMode: true,
	        slidesToShow: 6,
	        slidesToScroll: 1,
	        initialSlide: 3,
	        draggable: false,
	        responsive: [{
	            breakpoint: 991,
	            settings: {
	                slidesToShow: 5,
	                slidesToScroll: 1,
	                initialSlide: 2
	            }
	        }, {
	            breakpoint: 767,
	            settings: {
	                slidesToShow: 3,
	                slidesToScroll: 1,
	                initialSlide: 1
	            }
	        }, {
	            breakpoint: 550,
	            settings: {
	                slidesToShow: 2,
	                slidesToScroll: 1,
	                initialSlide: 1
	            }
	        }]
	    });
	    $('.js-employee-box').on('click', function() {
	        if (storeSlideshow.onClick) {
	            return false
	        }
	        var $currentEmployee = $(this);
	        slideShowAnimated($currentEmployee);
	        return false;
	    });
	    $('.js-modal__btn').on('click', function() {
	        $teamSlider.fadeIn();
	        slideShowAnimated();
	        return false;
	    });

	    function slideShowAnimated($currentEmployee) {
	        if (!$teamSlider.hasClass('slideshow-animated')) {
	            storeSlideshow.onClick = true;
	            var indexSlide = $currentEmployee.parent().index();
	            var modalSlide = $currentEmployee.attr('href');
	            storeSlideshow.indexSlideClick = indexSlide;
	            $currentEmployee.addClass('item-color');
	            $teamSlider.slick('slickGoTo', indexSlide, false);
	            setTimeout(function() {
	                $teamSlider.addClass('slideshow-animated');
	                setTimeout(function() {
	                    $currentEmployee.parent('.team-slideshow__item').addClass('item-animated');
	                }, 500);
	                setTimeout(function() {
	                    $(modalSlide).fadeIn();
	                    $('body').addClass('open-modal');
	                    $teamSlider.fadeOut();
	                }, 1000);
	            }, 1000);
	        } else {
	            $('.team-modal').fadeOut();
	            $('body').removeClass('open-modal');
	            setTimeout(function() {
	                $teamSlider.find('.item-animated').removeClass('item-animated');
	            }, 500);
	            setTimeout(function() {
	                $teamSlider.removeClass('slideshow-animated');
	                $teamSlider.find('.item-color').removeClass('item-color');
	            }, 1000);
	            setTimeout(function() {
	                if (storeSlideshow.indexSlideClick < storeSlideshow.initialSlide) {
	                    $teamSlider.slick('slickGoTo', storeSlideshow.initialSlide, false);
	                }
	            }, 1000);
	            storeSlideshow.onClick = false;
	            setTimeout(function() {            	
	            	$teamSlider.find('.slick-track').css({'left': 0});
	            }, 1400);
	        }
	    }

	    function mouseWheel($slider) {
	        $(window).on('wheel', {
	            $slider: $slider
	        }, mouseWheelHandler);
	    }

	    function mouseWheelHandler(event) {
	        event.preventDefault();
	        var $slider = event.data.$slider;
	        var delta = event.originalEvent.deltaY;
	        var currentItem = $('.slick-current').index();
	        var itemLength = $teamSlider.find('.slick-slide').length;
	        if (delta < 0 && currentItem > 0 && !$teamSlider.hasClass('slideshow-animated')) {
	            $slider.slick('slickPrev');
	        } else if (delta > 0 && currentItem < itemLength - 1 && !$teamSlider.hasClass('slideshow-animated')) {
	            $slider.slick('slickNext');
	        }
	    }
	};
// 

	$('.js-employee-box').on('click', function() {
		return false;
	});

	// morpheus.js
	// if ($('#morph-box').length) {
	// 	var svgMorpheus = new SVGMorpheus('#morph-box');
	// 	var icons = ['icon-1', 'icon-2', 'icon-3', 'icon-4', 'icon-5'];
	// }
	// if ($('#charity-morph').length) {
	// 	var svgMorpheus_2 = new SVGMorpheus('#charity-morph');
	// 	var icons_2 = ['charity-morph_1', 'charity-morph_2'];
	// }

	if($('.slick-charity').length) {
		$('.slick-charity').on('init', function(event, slick, currentSlide, nextSlide){
			var $status = $('.js-slide-num-5');
			var text = (slick.currentSlide + 1) + '/' + (slick.slideCount);
			$status.text(text);

			$('.js-status-line-2').addClass('loadbar_2');

		});

		$('.slick-charity').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.js-status-line-2').removeClass('loadbar_2');
		});

		$('.slick-charity').on('afterChange', function(event, slick, currentSlide, nextSlide) {
			// if ($('#charity-morph').length) {
			// 	svgMorpheus_2.to(icons_2[slick.currentSlide], {duration:900, rotation:'none'});
			// }
			// if(currentSlide === 1) {
			// 	$('.svg-morph-box').addClass('charity-slide-2');
			// } else {
			// 	$('.svg-morph-box').removeClass('charity-slide-2');
			// }

			var $status = $('.js-slide-num-5');
			var text = (slick.currentSlide + 1) + '/' + (slick.slideCount);
			$status.text(text);

			$('.js-status-line-2').addClass('loadbar_2');

			// dog-pics
			var dogPics = $('.dog-pics .dog-pics__item');
			dogPics.removeClass('active').eq(currentSlide).addClass('active');
		})

		$('.slick-charity').slick({
			dots: false,
			infinite: true,
			speed: 600,
			fade: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: false,
			autoplay: true,
			autoplaySpeed: 9000,
			pauseOnFocus: false,
			pauseOnHover: false,
			prevArrow: $('.prev-slide'),
			nextArrow: $('.next-slide')
		});
	}

	// index guarantee slider
	if($('.guarantees-index-slider').length) {
		$('.guarantees-index-slider').on('init', function(event, slick, currentSlide, nextSlide){
			var $status = $('.js-slide-num-6');
			var text = (slick.currentSlide + 1) + '/' + (slick.slideCount);
			$status.text(text);

			$('.js-status-line-3').addClass('loadbar_3');
		});

		$('.guarantees-index-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.js-status-line-3').removeClass('loadbar_3');
		});

		$('.guarantees-index-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
			var $status = $('.js-slide-num-6');
			var text = (slick.currentSlide + 1) + '/' + (slick.slideCount);
			$status.text(text);
			$('.js-status-line-3').addClass('loadbar_3');
		})

		$('.guarantees-index-slider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: false,
			autoplay: true,
			autoplaySpeed: 9000,
			pauseOnFocus: false,
			pauseOnHover: false,
			prevArrow: $('.prev-slide_guar'),
			nextArrow: $('.next-slide_guar')
		});
	}
	// 


	var projectsSlide = 0;
	if($('.slick-projects').length) {
		$('.slick-projects').on('afterChange', function(event, slick, currentSlide, nextSlide){
			projectsSlide = currentSlide;



			$('.js-status-line-1').addClass('loadbar');
			var $status = $('.js-slide-num-1');
			var text = (slick.currentSlide + 1) + '/' + (slick.slideCount);
			$status.text(text);

			// var morfImgs = $('#morf-box .bg-morf-img');
			// // morfImgs.eq(slick.currentSlide).fadeIn(600).prev().fadeOut(600);
			// morfImgs.fadeOut(900);
			// morfImgs.eq(slick.currentSlide).fadeIn(900);

			// svgMorpheus.to(icons[slick.currentSlide], {duration:900, rotation:'none'});

			// change page colors

			if ($('body').hasClass('fp-viewing-0-4') || $('body').hasClass('projects-page')) {
				if(currentSlide % 2 || currentSlide % 1) {
					$('.header').addClass('dark-section');
					$('.footer').addClass('dark-section');

				} else {                    
                    $('.header').removeClass('dark-section');
                    $('.footer').removeClass('dark-section');
				};
                
                if(currentSlide == 3) {
					$('.content').addClass('four-slide');
				} else {                    
                    $('.content').removeClass('four-slide');                    
				}
			}



			if(currentSlide % 2) {
				$('.projects').removeClass('white-bg');
				$('.projects').addClass('dark-bg');

				$('#morph-box').removeClass('svg-color-1');
				$('#morph-box').addClass('svg-color-2');
			} else {

				$('.projects').addClass('white-bg');
				$('.projects').removeClass('dark-bg');

				$('#morph-box').addClass('svg-color-1');
				$('#morph-box').removeClass('svg-color-2');
			}

			// navigation button text
			var slidesName = [];

			$('.projects-slider__slider-item').not('.slick-cloned').each(function () {
				var curSlideName = $(this).data('slide-name');
				slidesName.push(curSlideName);
			});

			$('.prev-slide_proj__title').text(slidesName[slick.currentSlide]);
			$('.next-slide_proj__title').text(slidesName[slick.currentSlide + 2]);

			if (slick.currentSlide === 0) {
				$('.prev-slide_proj__title').text(slidesName[slick.slideCount]);
			}
			if (slick.currentSlide === 4) {
				$('.next-slide_proj__title').text(slidesName[1]);
			}
			// project-pics
			var projPics = $('.project-pics .js-project-pics__item');
			projPics.removeClass('active').eq(currentSlide).addClass('active');

		});
		$('.slick-projects').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.js-status-line-1').removeClass('loadbar');

		});

		$('.slick-projects').on('init', function(event, slick, currentSlide, nextSlide){
			var $status = $('.js-slide-num-1');
			var text = (slick.currentSlide + 1) + '/' + (slick.slideCount);
			$status.text(text);
			// svgMorpheus.to(icons[slick.currentSlide], {duration:900, rotation:'none'});

			// navigation button text
			var slidesName = [];

			$('.projects-slider__slider-item').not('.slick-cloned').each(function () {
				var curSlideName = $(this).data('slide-name');
				slidesName.push(curSlideName);
			});


			$('.prev-slide_proj__title').text(slidesName[slick.currentSlide]);
			$('.next-slide_proj__title').text(slidesName[slick.currentSlide + 2]);


			if (slick.currentSlide === 0) {
				$('.prev-slide_proj__title').text(slidesName[slick.slideCount]);
			}
			if (slick.currentSlide === 4) {
				$('.next-slide_proj__title').text(slidesName[1]);
			}

		});


		$('.slick-projects').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: false,
			autoplay: true,
			autoplaySpeed: 9000,
			pauseOnFocus: false,
			pauseOnHover: false,
			prevArrow: $('.prev-slide_proj'),
			nextArrow: $('.next-slide_proj')
		});

	};

	if($('.content-box_partners').length) {
		$('.slick-partners').on('afterChange', function(event, slick, currentSlide, nextSlide){
			var $status = $('.js-slide-num-2');
			var text = (slick.currentSlide + 1) + '/' + (slick.slideCount);
			$status.text(text);
			$('.js-status-line-2').addClass('loadbar_2');

		});
		$('.slick-partners').on('init', function(event, slick, currentSlide, nextSlide){
			var $status = $('.js-slide-num-2');
			var text = (slick.currentSlide + 1) + '/' + (slick.slideCount);
			$status.text(text);
		});
		$('.slick-partners').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.js-status-line-2').removeClass('loadbar_2');

		});

		$('.slick-partners').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: false,
			autoplay: false,
			autoplaySpeed: 9000,
			pauseOnFocus: false,
			pauseOnHover: false
		});		
		 $('.partners-slider-nav__img').click(function(e) {
	        e.preventDefault();
	        var n = $(this).parent().index();
	        $('.slick-partners').slick('slickGoTo', n);
	    });
		
	};

	if($('.slick-news').length) {
		$('.slick-news').on('afterChange', function(event, slick, currentSlide, nextSlide){
			var $status = $('.js-slide-num-3');
			var text = (slick.currentSlide + 1) + '/' + (slick.slideCount);
			$status.text(text);
		});
		$('.slick-news').on('init', function(event, slick, currentSlide, nextSlide){
			var $status = $('.js-slide-num-3');
			var text = (slick.currentSlide + 1) + '/' + (slick.slideCount);
			$status.text(text);
		});

		$('.slick-news').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: false,
			autoplay: true,
			autoplaySpeed: 9000,
			pauseOnFocus: false,
			pauseOnHover: false
		});
	};

	if($('.slick-actions').length) {
		$('.slick-actions').on('afterChange', function(event, slick, currentSlide, nextSlide){
			var $status = $('.js-slide-num-1');
			var text = (slick.currentSlide + 1) + '/' + (slick.slideCount);
			$status.text(text);
			$('.js-status-line_act').addClass('loadbar');
		});
		$('.slick-actions').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.js-status-line_act').removeClass('loadbar');
		});
		$('.slick-actions').on('init', function(event, slick, currentSlide, nextSlide){
			var $status = $('.js-slide-num-1');
			var text = (slick.currentSlide + 1) + '/' + (slick.slideCount);
			$status.text(text);
		});

		$('.slick-actions').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: false,
			autoplay: true,
			autoplaySpeed: 9000,
			pauseOnFocus: false,
			pauseOnHover: false,
			prevArrow: $('.prev-slick-actions'),
			nextArrow: $('.next-slick-actions')

		});
	};


	$('.form-control__btn').click(function (e) {
		e.preventDefault();
		$('.box-capch').addClass('opened');
		return false;
	});
	

});


	// google map

	function initMap() {
		var map;

	// 1
	map = new google.maps.Map(document.getElementById('map'), {
		
		center: {lat: 55.771055, lng: 37.6300339},

		zoom: 18,
        
        scrollwheel: false,

		styles: [{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#0094ff"},{"saturation":"29"},{"weight":"1.44"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"hue":"#0094ff"},{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"geometry","stylers":[{"gamma":"1.59"},{"lightness":"-62"},{"color":"#005592"}]}]
	});

	var marker = new google.maps.Marker({

		position: {lat: 55.771055, lng: 37.6300339},

		map: map,

		title: 'Офис',

		icon: 'img/map-mark.png',
	});
}




$('.form-control__btn').click(function () {
	$('.box-capch').addClass('opened');
	return false;
});


var handler = function(){

	var height_footer = $('footer').height();
	var height_header = $('header').height();
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {

	}

}
$(window).bind('load', handler);
$(window).bind('resize', handler);



// video on main-screen

if ($('#main-video')) {
	var elem = document.getElementById("main-video");

	var onfullscreenchange =  function(e){
		var fullscreenElement =
		document.fullscreenElement ||
		document.mozFullScreenElement ||
		document.webkitFullscreenElement;
		var fullscreenEnabled =
		document.fullscreenEnabled ||
		document.mozFullscreenEnabled ||
		document.webkitFullscreenEnabled;
		console.log( 'fullscreenEnabled = ' + fullscreenEnabled, ',  fullscreenElement = ', fullscreenElement, ',  e = ', e);
		if(fullscreenElement == null) {
			elem.pause();
			$('#main-video').hide();
			$('.js-close-video').hide();
			$('.main-screen .animated-overlay').removeClass('video-mode');
			$('.content-box__col').removeClass('video-mode-hide');
            $('.main-video').removeClass('showed');
		}
	}

	document.addEventListener("webkitfullscreenchange", onfullscreenchange);
	document.addEventListener("mozfullscreenchange",    onfullscreenchange);
	document.addEventListener("fullscreenchange",       onfullscreenchange);
}


// parallax

/*window.onload = function () {
	
	if ( $(window).width() <= 1024 ) {
		return;
	}

	if ($('body').hasClass('about-us-page') 
	 || $('body').hasClass('guarantees-page')
	 || $('body').hasClass('team-page') 
	 || $('body').hasClass('confidential-page') 
	 || $('body').hasClass('one-new')
	 || $('body').hasClass('one-article')
	 || $('body').hasClass('partners-page')
     || $('body').hasClass('proj-one-page')
	 ) {
		var parallaxBox2 = document.getElementById ( 'box' );
		var c1left = document.getElementById ( 'bg-logo' ).offsetLeft,
		c1top = document.getElementById ( 'bg-logo' ).offsetTop;

		parallaxBox2.onmousemove = function ( event ) {
			event = event || window.event;
			var x = event.clientX - parallaxBox2.offsetLeft,
			y = event.clientY - parallaxBox2.offsetTop;

			mouseParallax ( 'bg-logo', c1left, c1top, x, y, 60 );
		};
        
	}
	

	if ($('body').hasClass('main-page')) {
		var parallaxBox = document.getElementById ( 'box' );
		var c1left = document.getElementById ( 'bg-logo' ).offsetLeft,
		c1top = document.getElementById ( 'bg-logo' ).offsetTop,
		c2left = document.getElementById ( 'bg-consulting' ).offsetLeft,
		c2top = document.getElementById ( 'bg-consulting' ).offsetTop,
		c3left = document.getElementById ( 'bg-projects' ).offsetLeft,
		c3top = document.getElementById ( 'bg-projects' ).offsetTop,
		c4left = document.getElementById ( 'bg-partners' ).offsetLeft,
		c4top = document.getElementById ( 'bg-partners' ).offsetTop
		c5left = document.getElementById ( 'bg-stars' ).offsetLeft,
		c5top = document.getElementById ( 'bg-stars' ).offsetTop,		
		d1left = document.getElementById ( 'charity-par-1' ).offsetLeft,
		d1top = document.getElementById ( 'charity-par-1' ).offsetTop,
		d2left = document.getElementById ( 'charity-par-2' ).offsetLeft,
		d2top = document.getElementById ( 'charity-par-2' ).offsetTop,
		d3left = document.getElementById ( 'charity-par-3' ).offsetLeft,
		d3top = document.getElementById ( 'charity-par-3' ).offsetTop,
		d4left = document.getElementById ( 'charity-par-4' ).offsetLeft,
		d4top = document.getElementById ( 'charity-par-4' ).offsetTop,
		c7left = document.getElementById ( 'bg-img-garantees_1' ).offsetLeft,
		c7top = document.getElementById ( 'bg-img-garantees_1' ).offsetTop,
		c8left = document.getElementById ( 'partners-title' ).offsetLeft,
		c8top = document.getElementById ( 'partners-title' ).offsetTop,
		c9left = document.getElementById ( 'bg-img-garantees_4' ).offsetLeft,
		c9top = document.getElementById ( 'bg-img-garantees_4' ).offsetTop,

		c10left = document.getElementById ( 'bg-img-garantees_2' ).offsetLeft,
		c10top = document.getElementById ( 'bg-img-garantees_2' ).offsetTop,

		c11left = document.getElementById ( 'bg-img-garantees_3' ).offsetLeft,
		c11top = document.getElementById ( 'bg-img-garantees_3' ).offsetTop,

		c12left = document.getElementById ( 'bg-img-garantees_5' ).offsetLeft,
		c12top = document.getElementById ( 'bg-img-garantees_5' ).offsetTop;

		parallaxBox.onmousemove = function ( event ) {
			event = event || window.event;
			var x = event.clientX - parallaxBox.offsetLeft,
			y = event.clientY - parallaxBox.offsetTop;

			mouseParallax ( 'bg-logo', c1left, c1top, x, y, 30 );
			mouseParallax ( 'bg-consulting', c2left, c2top, x, y, 30 );
			mouseParallax ( 'bg-projects', c3left, c3top, x, y, 20 );
			mouseParallax ( 'bg-partners', c4left, c4top, x, y, 30 );
			mouseParallax ( 'bg-stars', c5left, c5top, x, y, 30 );
			// mouseParallax ( 'bg-money', c6left, c6top, x, y, 30 );
			mouseParallax ( 'bg-img-garantees_1', c7left, c7top, x, y, 30 );
			//mouseParallax ( 'partners-title', c8left, c8top, x, y, 10 );
			mouseParallaxHor ( 'bg-img-garantees_4', c9left, c9top, x, y, 30 );
			mouseParallax ( 'bg-img-garantees_2', c10left, c10top, x, y, 40 );
			mouseParallax ( 'bg-img-garantees_3', c11left, c11top, x, y, 20 );
			mouseParallax ( 'bg-img-garantees_5', c12left, c12top, x, y, 60 );
			mouseParallax ( 'charity-par-1', d1left, d1top, x, y, 30 );
			mouseParallax ( 'charity-par-2', d2left, d2top, x, y, 30 );
			mouseParallax ( 'charity-par-3', d3left, d3top, x, y, 20 );
			mouseParallax ( 'charity-par-4', d4left, d4top, x, y, 20 );
			// mouseParallax ( 'bg-projects', c3left, c3top, x, y, 30 );
			// mouseParallax ( 'l4', c4left, c4top, x, y, 65 );
		}
	}
	if ($('body').hasClass('actions-page')) {
		var parallaxBox = document.getElementById ( 'box' );
		var d1left = document.getElementById ( 'charity-par-1' ).offsetLeft,
		d1top = document.getElementById ( 'charity-par-1' ).offsetTop,
		d2left = document.getElementById ( 'charity-par-2' ).offsetLeft,
		d2top = document.getElementById ( 'charity-par-2' ).offsetTop;

		parallaxBox.onmousemove = function ( event ) {
			event = event || window.event;
			var x = event.clientX - parallaxBox.offsetLeft,
			y = event.clientY - parallaxBox.offsetTop;

			mouseParallax ( 'charity-par-1', d1left, d1top, x, y, 30 );
			mouseParallax ( 'charity-par-2', d2left, d2top, x, y, 30 );

		}
	}
	if ($('body').hasClass('charity-page')) {
		var parallaxBox = document.getElementById ( 'box' );
		var d1left = document.getElementById ( 'charity-par-1' ).offsetLeft,
		d1top = document.getElementById ( 'charity-par-1' ).offsetTop,
		d2left = document.getElementById ( 'charity-par-2' ).offsetLeft,
		d2top = document.getElementById ( 'charity-par-2' ).offsetTop,
		d3left = document.getElementById ( 'charity-par-3' ).offsetLeft,
		d3top = document.getElementById ( 'charity-par-3' ).offsetTop,
		d4left = document.getElementById ( 'charity-par-4' ).offsetLeft,
		d4top = document.getElementById ( 'charity-par-4' ).offsetTo;

		parallaxBox.onmousemove = function ( event ) {
			event = event || window.event;
			var x = event.clientX - parallaxBox.offsetLeft,
			y = event.clientY - parallaxBox.offsetTop;

			mouseParallax ( 'charity-par-1', d1left, d1top, x, y, 30 );
			mouseParallax ( 'charity-par-2', d2left, d2top, x, y, 30 );
			mouseParallax ( 'charity-par-3', d3left, d3top, x, y, 20 );
			mouseParallax ( 'charity-par-4', d4left, d4top, x, y, 20 );
		}
	}
    
    if ($('body').hasClass('guarantees-page')) {
		var parallaxBox = document.getElementById ( 'box' );
		var d1left = document.getElementById ( 'bg-logo' ).offsetLeft,
            d1top = document.getElementById ( 'bg-logo' ).offsetTop,
            d2left = document.getElementById ( 'js-img' ).offsetLeft,
            d2top = document.getElementById ( 'js-img' ).offsetTop;		

		parallaxBox.onmousemove = function ( event ) {
			event = event || window.event;
			var x = event.clientX - parallaxBox.offsetLeft,
			y = event.clientY - parallaxBox.offsetTop;

			mouseParallax ( 'bg-logo', d1left, d1top, x, y, 60 );
			mouseParallax ( 'js-img', d2left, d2top, x, y, 5 );			
		}
	}
	
}

function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
	var obj = document.getElementById ( id );
	var parentObj = obj.parentNode,
	containerWidth = parseInt( parentObj.offsetWidth ),
	containerHeight = parseInt( parentObj.offsetHeight );
	obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
	obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
}

function mouseParallaxHor ( id, left, top, mouseX, mouseY, speed ) {
	var obj = document.getElementById ( id );
	var parentObj = obj.parentNode,
	containerWidth = parseInt( parentObj.offsetWidth ),
	containerHeight = parseInt( parentObj.offsetHeight );
	obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
	
}*/
