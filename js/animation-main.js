$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 400) {
		$('.navbar').addClass('shrink');
		$('.layer2text').addClass('fadeInUp');
		$('.nav-link').removeClass('navlinkcol1')
		$('.nav-link').addClass('navlinkcol2');
    }
    else {
		$('.navbar').removeClass('shrink');
		$('.layer2text').removeClass('fadeInUp');

		$('.nav-link').addClass('navlinkcol1');
		$('.nav-link').removeClass('navlinkcol2');
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
