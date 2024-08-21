/*
	1. All are equal
	2. All are unequal
	3. First, Second, Third are equal
	4. First, Second, Fourth are equal
	5. Second, Third, Fourth are equal
	6. First, Third, Fourth are equal
*/
function findEqual(){
	var a = parseInt(document.getElementById("first").value);
	var b = parseInt(document.getElementById("second").value);
	var c = parseInt(document.getElementById("third").value);
	var d = parseInt(document.getElementById("fourth").value);
	
	var resultField = document.getElementById("result");
	
	if(a == b && a == c && a == d){
		resultField.innerHTML = "All are equal";
	}else if(a == b && a == c){
		resultField.innerHTML = "First, Second, Third are equal";
	}else if(a == c && a == d){
		resultField.innerHTML = "First, Third, Fourth are equal";
	}else if(b == c && b == d){
		resultField.innerHTML = "Second, Third, Fourth are equal";
	}else if(a == b && a == d){
		resultField.innerHTML = "First, Second, Fourth are equal";
	}else if(a != b && a != c && a != d){
		resultField.innerHTML = "All are unequal";
	}
}