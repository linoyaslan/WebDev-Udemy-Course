var button = document.querySelector("button");

var background = document.querySelector("body");

button.addEventListener("click", function(){
	if(background.style.background == "pink"){
		background.style.background = "white";
	}
	else{
		background.style.background = "pink";
	}
});
