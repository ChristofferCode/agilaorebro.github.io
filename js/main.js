jQuery(document).ready(function($){

$(window).scroll(function(){
    if($(window).scrollTop() > 200){
        $(".back-to-top").fadeIn(200);
    } else{
        $(".back-to-top").fadeOut(200);
    }
});

$('.back-to-top').click(function() {
    $('html, body').animate({ scrollTop:0 }, '800');
    return false;
});

var win_height = $(window).height();
$("section.fullheight").each(function(){
	var section_height = $(this).height();
	$(this).css({'height':section_height,'min-height':win_height});
});

$(window).on("resize", function (){
	if($(window).width() <1200){
		newPercentage = (($(window).width() / 1200) * 100) + "%";
		$(".main-title").css({"font-size": newPercentage});
	}else{
		$(".main-title").css({"font-size": "100%"});
	}
});

// parallax background image
$('.section-parallax').parallax("50%", 0.1);
// parallax scrolling
if( $('.parallax-scrolling').length ){
	$('.parallax-scrolling').parallax({speed : 0.15});
}

$(window).scroll(function(){
	var scrollTop = $(window).scrollTop(); 
	if (scrollTop > 0 ) { 
		$('.header-when-scroll').show();
		$('.header-at-top').hide();
	}else{
		$('.header-when-scroll').hide();
		$('.header-at-top').show();
		}
	}
);

$("a[href^='#']").on('click', function(e){
	var selectorHeight = $('.fixed-top').height();
	var scrollTop = $(window).scrollTop(); 
	e.preventDefault();
	var id = $(this).attr('href');
	if(typeof $(id).offset() !== 'undefined'){
		var goTo = $(id).offset().top - selectorHeight;
		$("html, body").animate({ scrollTop: goTo }, 1000);
	}
});	


})
