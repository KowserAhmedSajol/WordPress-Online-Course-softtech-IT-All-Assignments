var x = 5;
document.getElementById("one").innerHTML = x ** 2;
document.getElementById("two").innerHTML = x * 2;

var v = 5;
v +=100;
document.getElementById("three").innerHTML = v;



// functions 


function f1( p1 , p2 ) {
	return p1*p2;
}



document.getElementById("four").innerHTML = f1(3,8);



// f to c 

function fToc(f) {
	return (5/9) * (f-32);
}


document.getElementById("five").innerHTML = fToc(90);