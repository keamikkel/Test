function insertText(){
	 document.getElementById("newContent").innerHTML = "some new text: <br> HELLO <br>";
}
function calculate(){
	var t = widthBox.value;
	// read from the textBoxs
	var w = document.getElementById("widthBox").value;
	var l = document.getElementById("lengthBox").value;
	var h = document.getElementById("heightBox").value;
	// convert to float
	w=parseFloat(w);
	h=parseFloat(h);
	l=parseFloat(l);
	var result = w*l*h;
	// show result in div
	document.getElementById("result").innerHTML = result;
}
function multiplication(){
	// read from textBox 
	document.getElementById("mult-tb").innerHTML ="";
	var f = document.getElementById ("factor").value;
	for (var i=1;i<=10;i++){
		var res=f*i;
		// show the result in div
		document.getElementById("mult-tb").innerHTML += res+"<br/>";
	}
}
	

	