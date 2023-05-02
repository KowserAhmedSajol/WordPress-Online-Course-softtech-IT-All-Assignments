$(document).ready(function(){
	
	
	
	var valuOne = $(".v-1").html();
	var valuTwo = $(".v-2").html();
	var valuThree = $(".v-3").html();
	
	$(".p-1").mouseenter(function(){
		$(".full-1 .percent-1").animate({ width: valuOne});
	});
	$(".p-1").mouseleave(function(){
		$(".full-1 .percent-1").animate({ width: '0%'});
	});
	$(".p-2").mouseenter(function(){
		$(".full-2 .percent-2").animate({ width: valuTwo});
	});
	$(".p-2").mouseleave(function(){
		$(".full-2 .percent-2").animate({ width: '0%'});
	});
	$(".p-3").mouseenter(function(){
		$(".full-3 .percent-3").animate({ width: valuThree});
	});
	$(".p-3").mouseleave(function(){
		$(".full-3 .percent-3").animate({ width: '0%'});
	});
});