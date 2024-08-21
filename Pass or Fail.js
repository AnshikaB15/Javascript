
function findAnswer(){
	var a = parseInt(document.getElementById("first").value);
	var b = parseInt(document.getElementById("second").value);
	var c = parseInt(document.getElementById("third").value);
	
	
	var resultField = document.getElementById("result");
	
	if(a >= 50 && b >= 50 && c >= 50){
		resultField.innerHTML = "Pass";
	}else if(a <= 50 && b >= 50 && c >= 50){
		resultField.innerHTML = "Fail";
	}else if(a <= 50 && b <= 50 && c >= 50){
		resultField.innerHTML = "Fail";
	}else if(a <= 50 && b <= 50 && c <= 50){
		resultField.innerHTML = "Fail";
	}else if(a >= 50 && b <= 50 && c >= 50){
		resultField.innerHTML = "Fail";
	}else if(a >= 50 && b >= 50 && c <= 50){
		resultField.innerHTML = "Fail";
 }
}