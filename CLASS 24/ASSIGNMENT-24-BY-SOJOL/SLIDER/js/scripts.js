var n;
n=1;
function right() {
n=n+1;	
document.getElementById('img').src='images/'+n+'.jpg';
}
function left() {
n=n-1;	
document.getElementById('img').src='images/'+n+'.jpg';
}