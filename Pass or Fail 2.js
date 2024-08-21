function findAnswer(){
	var a = parseInt(document.getElementById("first").value);
	var b = parseInt(document.getElementById("second").value);
	var c = parseInt(document.getElementById("third").value);
	var d = parseInt(document.getElementById("fourth").value);
	var e = parseInt(document.getElementById("fifth").value);
	
	
	var resultField = document.getElementById("result");
	
	if(a >= 50 && b >= 50 && c >= 50 && d >= 50 && e >= 50){
		resultField.innerHTML = "Pass";
	}else if(a <= 50 && b >= 50 && c >= 50 && d >= 50 && e >= 50){
		resultField.innerHTML = "promoted";
	}else if(a <= 50 && b <= 50 && c >= 50 && d >= 50 && e >= 50){
		resultField.innerHTML = "promoted";
	}else if(a >= 50 && b <= 50 && c >= 50 && d >= 50 && e >= 50){
		resultField.innerHTML = "promoted";
	}else if(a >= 50 && b <= 50 && c <= 50 && d >= 50 && e >= 50){
		resultField.innerHTML = "promoted";
	}else if(a <= 50 && b >= 50 && c <= 50 && d >= 50 && e >= 50){
		resultField.innerHTML = "promoted";
	}else if(a >= 50 && b >= 50 && c <= 50 && d <= 50 && e >= 50){
		resultField.innerHTML = "promoted";
	}else if(a >= 50 && b >= 50 && c <= 50 && d >= 50 && e <= 50){
		resultField.innerHTML = "promoted";
	}else if(a <= 50 && b >= 50 && c >= 50 && d <= 50 && e >= 50){
		resultField.innerHTML = "promoted";
	}else if(a >= 50 && b <= 50 && c >= 50 && d <= 50 && e >= 50){
		resultField.innerHTML = "promoted";
	}else if(a <= 50 && b >= 50 && c >= 50 && d <= 50 && e <= 50){
		resultField.innerHTML = "promoted";
	}else if(a >= 50 && b <= 50 && c >= 50 && d >= 50 && e <= 50){
		resultField.innerHTML = "promoted";
	}else{ 
		resultField.innerHTML = "Fail";
	}
}