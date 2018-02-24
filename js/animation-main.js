$(document).ready(function() {
	$(window).scroll(function() {

	// Navbar
		if($(document).scrollTop() > 400) {
			$('.navbar').addClass('shrink');
			$('.layer2text').addClass('fadeInUp');
			$('.nav-link').removeClass('navlinkcol1')
			$('.nav-link').addClass('navlinkcol2');
		}
		else {
			$('.navbar').removeClass('shrink');
			$('.nav-link').addClass('navlinkcol1');
			$('.nav-link').removeClass('navlinkcol2');
		}
	
	// zero Row
		if($(document).scrollTop()>2900){
			$('.zeror-left').addClass('fadeInLeft');
			$('.zeror-right').addClass('fadeInRight');
			$('.zeror-middle').addClass('fadeInUp')
		}
		else{
			$('.zeror-left').removeClass('fadeInLeft');
			$('.zeror-right').removeClass('fadeInRight');
			$('.zeror-middle').removeClass('fadeInUp')
		}

	// first Row
		if($(document).scrollTop()>3200){
			$('.firstr-left').addClass('fadeInLeft');
			$('.firstr-right').addClass('fadeInRight');
			$('.firstr-middle').addClass('fadeInUp')
		}
		else{
			$('.firstr-left').removeClass('fadeInLeft');
			$('.firstr-right').removeClass('fadeInRight');
			$('.firstr-middle').removeClass('fadeInUp')
		}

	// second row
		if($(document).scrollTop()>3600){
			$('.secondr-left').addClass('fadeInLeft');
			$('.secondr-right').addClass('fadeInRight');
			$('.secondr-middle').addClass('fadeInUp')
		}
		else{
			$('.secondr-left').removeClass('fadeInLeft');
			$('.secondr-right').removeClass('fadeInRight');
			$('.secondr-middle').removeClass('fadeInUp')
		}

	// third row
		if($(document).scrollTop()>3950){
			$('.thirdr-left').addClass('fadeInLeft');
			$('.thirdr-right').addClass('fadeInRight');
			$('.thirdr-middle').addClass('fadeInUp')
		}
		else{
			$('.thirdr-left').removeClass('fadeInLeft');
			$('.thirdr-right').removeClass('fadeInRight');
			$('.thirdr-middle').removeClass('fadeInUp')
		}

	// Fourth Row
		if($(document).scrollTop()>4400){
			$('.fourthr-left').addClass('fadeInLeft');
			$('.fourthr-right').addClass('fadeInRight');
			$('.fourthr-middle').addClass('fadeInUp')
		}
		else{
			$('.fourthr-left').removeClass('fadeInLeft');
			$('.fourthr-right').removeClass('fadeInRight');
			$('.fourthr-middle').removeClass('fadeInUp')
		}

	// Fifth row
		if($(document).scrollTop()>4900){
			$('.fifthr-left').addClass('fadeInLeft');
			$('.fifthr-right').addClass('fadeInRight');
			$('.fifthr-middle').addClass('fadeInUp')
		}
		else{
			$('.fifthr-left').removeClass('fadeInLeft');
			$('.fifthr-right').removeClass('fadeInRight');
			$('.fifthr-middle').removeClass('fadeInUp')
		}
  });
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