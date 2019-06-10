
function isAlpha(ch){
	var ch = ch.split(" ").join("");
	var regex = /[a-z]/gi;
	var letters = ch.match(regex);

	if (!(letters)){
		return [ch, "Empty string can't be processed!"];
	}


	else if (!(ch.length===letters.length)){
		return [ch, "Not a vaild input only letter A-Z or a-z"];
		}
	
	else{
		return [letters, letters.length ] 
		}
};
var input_text = prompt("I can only count letters!", "Try to trick me");
document.body.innerHTML = "<div> There are this many letters in " + input_text + " see line below!</div>";
var letters  = isAlpha(input_text);
document.body.innerHTML += "letters: "+ letters[0] + " length: " + letters[1];
