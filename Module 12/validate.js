
var psd = 10021996;

// var list = {
// 	"comment": ["Good", "Not bad", "Great"]
// };


// var frmvalidator = new Validator("myform");

// frmvalidator.addValidation("name","req","Please enter your Name");
// frmvalidator.addValidation("comment","req","Please enter your comment");
// var arr = new Array();

// function insert(){
// 	document.getElementById("check").innerHTML = arr;
	
// }

// function show() {
// 	  var string="All Elements of the Array : ";
// 	  for(i = 0; i < arr.length; i++) {
// 	  string = string+document.getElementById("name").value+arr[i];
// 	  <br>
// 	}
// }

function valid(){
	if (document.getElementById("name").value != '' && document.getElementById("comment").value != ''){
		if (document.getElementById("pswd").value != '') {
			if (document.getElementById("pswd").value == psd) {
				// <input type="button" value="Save" onclick="insert(this.form.title.value)">
			} else {
				alert("Secret Key doesn't match");
			}
		}else {
			alert("Please enter the secret key");
		}
		
	} else {
		alert("Please enter your name and comment");
	}
}
