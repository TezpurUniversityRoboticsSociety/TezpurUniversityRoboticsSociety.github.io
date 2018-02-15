$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 200) {
    	$('.navbar').addClass('shrink');
    }
    else {
    $('.navbar').removeClass('shrink');
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