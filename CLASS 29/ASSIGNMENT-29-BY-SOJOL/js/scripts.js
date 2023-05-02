$(document).ready(function() {
	
	
	
	
	
	
	
	var r = confirm ("This web page may slow your computer. If it is ok to you then carry on.");
	
	if (r == false) {
		window.close();
	}
	
	$(window).scroll(function() {
		var menuHeight = $(".header").outerHeight();
		var hHeight = $(".section-1").outerHeight();
		var totalHeight = hHeight;
		var nHeight = $(window).scrollTop();
		
		if( nHeight > totalHeight ) {
			$(".header").addClass("fixed");
		}
		else {
			$(".header").removeClass("fixed");
		}
	})
	
	
	
}) 