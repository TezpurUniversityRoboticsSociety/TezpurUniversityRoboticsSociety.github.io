
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

  $(document).ready(function(){
      $("#myBtn").click(function(){
          $("#myModal").modal();
      });
  });