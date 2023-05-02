$(document).ready(function() {
	$("#hide").click(function() {
		$("#h").hide();
	})
	$("#show").click(function() {
		$("#h").show();
	})
	$("#toggle").click(function() {
		$("#h").toggle();
	})

	$("#fade").click(function() {
		$("#one").fadeToggle();
		$("#two").fadeOut();
	})


	$("#text").click(function() {
		var div = $("#text-box");
		div.animate({paddingRight:'50px'}, "3000");
		div.animate({fontSize: '100px'}, "3000")
	})


	$("#change").click(function() {
		$("#b-1").css("font-family", "tahoma");
		$("#b-2").css("background-color", "yellow");
		$("#b-3").css("color", "violet");
		$("#b-4").css("text-transform", "uppercase");
	})





}) 