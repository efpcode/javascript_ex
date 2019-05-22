
function isAlpha(ch){
	var letters ="";
	var i;
	for(i = 0; i < ch.length; i++){
		if(/_/.test(ch[i])){
			continue
		}
		else if ( /^\W/.test(ch[i])){
			continue;
		}
		else if (/^[A-za-z]+$/.test(ch[i])){
			letters += ch[i];
		}
		else{
			var letters = "Good job You Tricked Me!";

			return [letters, letters.length ] 
		}
	};
	return [letters, letters.length];
};
var input_text = prompt("I can only count letters!", "Try to trick me");
document.body.innerHTML = "<div> There are this many letters in " + input_text + " see line below!</div>";
var letters  = isAlpha(input_text);
document.body.innerHTML += "letters: "+ letters[0] + " length: " + letters[1];




