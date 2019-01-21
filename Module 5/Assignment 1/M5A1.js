var dict = { 
	"Quiz" :[
	{
	"question": "Each Computer has a built in instructions set that it knows how to execute-by-design.",
	"choices": [true, false],
	"answer" : true,
	"hints" : ["Recall that we use the term 'computation' that means the execution of a sequence of instructions by a computer with the intention of solving a given problem.","Computation can be used to mean the sequence of computer instructions."],
   },
   {
   	"question": "The computer uses intelligence to execute instructions.",
	"choices": [true, false],
	"answer" : false,
	"hints" : ["Recall that we said a computer executes the instructions given to it mechanically","Mechanically we can execute the instructions in computer"],
   }
   ]
};

var obj = JSON.stringify(dict);
var objp = JSON.parse(obj);
var len = objp.Quiz.length;

load();
function load(input){
	for (var i = len - 1; i >= 0 ; i--) {
		var h = document.getElementById('ques_display');
		h.insertAdjacentHTML('afterend', '<div id = "ques_space'+i+'"class = "jumbotron jumbotron-fluid"></div>');
		var q = document.getElementById('ques_space'+i);
		q.insertAdjacentHTML('afterbegin', '<p id = "ques'+i+'"> Q'+i+')  ' + objp.Quiz[i].question + '</p>');

		var btn = document.getElementById("ques"+i);
		var hint = '<p><button id = "hint-btn'+i+'" class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample'+i+'" aria-expanded="false" aria-controls="collapseExample">Hint\
		</button>\
		</p>\
		<div class="collapse" id="collapseExample'+i+'">\
		  	<div class="card card-body">\
		    	<div id = "hintext'+i+'" class = "row">\
					'+objp.Quiz[i].hints[0]+'\
		    	</div>\
		    	<div class = "row">\
		    		<div class = "col-lg-6">\
		    			<button type="button" id = "p'+i+'" class="btn btn-primary" onclick = "goto(this)" disabled>Previous</button>\
		    		</div>\
		    		<div class = "col-lg-6">\
		    			<button type="button" id = "n'+i+'" class="btn btn-primary" style = "float: right" onclick = "goto(this)">Next</button>\
			    	</div>\
			    </div>\
		    </div>\
		</div>';

		btn.insertAdjacentHTML("afterend", hint);

		var true_btn = '<div id = "t_btn'+i+'" class="radio">\
			  				<label><input id = "t'+i+'" type="radio" name="optradio" value = "true" onclick="check(this)">True</label>\
						</div>'
		document.getElementById("collapseExample"+ i).insertAdjacentHTML("afterend", true_btn);

		var false_btn = '<div id = "f_btn'+i+'" class="radio">\
			  				<label><input id = "f'+i+'" type="radio" name="optradio" value = "false" onclick="check(this)">False</label>\
						</div>'
		document.getElementById("t_btn"+ i).insertAdjacentHTML("afterend", false_btn);

		document.getElementById("f_btn"+ i).insertAdjacentHTML("afterend", '<div id = "success'+i+'" style="display:none" class="alert alert-success">Your answer is correct!</div>');
		document.getElementById("f_btn"+ i).insertAdjacentHTML("afterend", '<div id = "danger'+i+'" style="display:none" class="alert alert-danger">Your answer is incorrect!</div>');
	}
};

function goto(input) {
	// console.log(input);
	var tokens = input.id.split("");
	// console.log(tokens);
	if (tokens[0] == "p") {
		document.getElementById("hintext" + tokens[1]).innerHTML = objp.Quiz[tokens[1]].hints[0];
		document.getElementById("n" + tokens[1]).disabled = false;
		document.getElementById("p" + tokens[1]).disabled = true;
	} else {
		document.getElementById("hintext" + tokens[1]).innerHTML = objp.Quiz[tokens[1]].hints[1];
		document.getElementById("p" + tokens[1]).disabled = false;
		document.getElementById("n" + tokens[1]).disabled = true;
	}
}

function check(input) {
	var tokens = input.id.split("");
	if (tokens[0] == "t") {
		var answer = true;
	} else {
		var answer = false;
	}

	if (answer == objp.Quiz[tokens[1]].answer) {
		document.getElementById("success" + tokens[1]).style.display = "block";
		document.getElementById("t"+ tokens[1]).disabled = true;
		document.getElementById("f"+ tokens[1]).disabled = true;
	} else {
		document.getElementById("danger" + tokens[1]).style.display = "block";
		document.getElementById("t"+ tokens[1]).disabled = true;
		document.getElementById("f"+ tokens[1]).disabled = true;
	}
}
