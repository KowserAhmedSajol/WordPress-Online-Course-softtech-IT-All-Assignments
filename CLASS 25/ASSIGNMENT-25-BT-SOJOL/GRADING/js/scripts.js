
var result = prompt("Apnar mark din ar grade janun");

if ( result >= 80 && result <= 100 ) {
	document.getElementById('show').innerHTML="Congratulation, you got A+";
	document.getElementById('show').style.color="#009432";
	document.getElementById("show").style.display = "block";
}
else if ( result >=70 && result <= 79 ) {
	document.getElementById('show').innerHTML="Your grade is A";
	document.getElementById('show').style.color="#D980FA";
	document.getElementById("show").style.display = "block";
}
else if ( result >=60 && result <= 69 ) {
	document.getElementById('show').innerHTML="Your grade is A-";
	document.getElementById('show').style.color="#D980FA";
	document.getElementById("show").style.display = "block";
}
else if ( result >=50 && result <= 59 ) {
	document.getElementById('show').innerHTML="Your grade is B";
	document.getElementById('show').style.color="#D980FA";
	document.getElementById("show").style.display = "block";
}
else if ( result >=40 && result <= 49 ) {
	document.getElementById('show').innerHTML="Your grade is C";
	document.getElementById('show').style.color="#D980FA";
	document.getElementById("show").style.display = "block";
}
else if ( result >=33 && result <= 39 ) {
	document.getElementById('show').innerHTML="Your grade is D";
	document.getElementById('show').style.color="#e55039";
	document.getElementById("show").style.display = "block";
}
else if ( result <33 && result > 0 ) {
	document.getElementById('show').innerHTML=" Sorry ..!! You failed";
	document.getElementById('show').style.color="#eb2f06";
	document.getElementById("show").style.display = "block";
}
else {
	document.getElementById('show').innerHTML="Bro, Try to put a valid number";
	document.getElementById('show').style.color="#1B1464";
	document.getElementById("show").style.display = "block";
}