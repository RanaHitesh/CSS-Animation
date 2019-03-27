var card=document.querySelectorAll(".card");

for(var i=0; i<card.length; i++){
	card[i].addEventListener("click",clicked);
}

function clicked(){
	this.classList.toggle("flip");
}