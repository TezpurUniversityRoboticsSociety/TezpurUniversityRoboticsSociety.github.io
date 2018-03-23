
$(document).scroll(function() {

	var y=$(this).scrollTop();
	var x=$('.layer2text').position();
	// Navbar
		if(y > (x.top + 70)) {
			$('.navbar').addClass('shrink');
			$('.layer2text').removeClass('removed');
			$('.nav-link').removeClass('navlinkcol1')
			$('.nav-link').addClass('navlinkcol2');
		}
		else {

			$('.navbar').removeClass('shrink');
			$('.nav-link').addClass('navlinkcol1');
			$('.nav-link').removeClass('navlinkcol2');
		}

	var z=$('.layer3-text').position();
	// Objetives
		if(y > (z.top + 150)){
			$('.layer3-text').removeClass('removed');
		}
	
	// zero Row
		if($(document).scrollTop()>2900){
			$('.zeror-left').addClass('fadeInLeft');
			$('.zeror-right').addClass('fadeInRight');
			$('.zeror-middle').addClass('fadeInUp')
		}

	// first Row
		if($(document).scrollTop()>3200){
			$('.firstr-left').addClass('fadeInLeft');
			$('.firstr-right').addClass('fadeInRight');
			$('.firstr-middle').addClass('fadeInUp')
		}

	// second row
		if($(document).scrollTop()>3600){
			$('.secondr-left').addClass('fadeInLeft');
			$('.secondr-right').addClass('fadeInRight');
			$('.secondr-middle').addClass('fadeInUp')
		}


	// third row
		if($(document).scrollTop()>3950){
			$('.thirdr-left').addClass('fadeInLeft');
			$('.thirdr-right').addClass('fadeInRight');
			$('.thirdr-middle').addClass('fadeInUp')
		}


	// Fourth Row
		if($(document).scrollTop()>4400){
			$('.fourthr-left').addClass('fadeInLeft');
			$('.fourthr-right').addClass('fadeInRight');
			$('.fourthr-middle').addClass('fadeInUp')
		}


	// Fifth row
		if($(document).scrollTop()>4900){
			$('.fifthr-left').addClass('fadeInLeft');
			$('.fifthr-right').addClass('fadeInRight');
			$('.fifthr-middle').addClass('fadeInUp')
		}
 });




$(document).ready(function() {
	$('.slide-section').click(function(e) {
		var linkHref = $(this).attr('href');	
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top
		});
		e.preventDefault();
	});
});



// For the first button to animate on hover
$(".btn-lg").hover(
	function() {
		$(this).addClass("bounce");
	},
	function() {
		$(this).removeClass("bounce");
	}
)