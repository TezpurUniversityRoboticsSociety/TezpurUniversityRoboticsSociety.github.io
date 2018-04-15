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

//Scroll to desired sections on nav-bar clicks
$(".slide-section").click(function(e) {
	var linkHref = $(this).attr('href');
    $('html,body').animate({
        scrollTop: $(linkHref).offset().top},
        'slow');
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

// Go to ABOUT US section on clicking EXPLORE button
  $(".btn-lg").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});
  
  $(document).ready(function(){
      $("#myBtn").click(function(){
          $("#myModal").modal();
      });
  });



