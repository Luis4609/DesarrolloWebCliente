// const menuHover = document.getElementById("menu");

// menuHover.addEventListener('click', function( event){
//     event.target.style.color = "red";
// })

// test.addEventListener("mouseover", function( event ) {
//     // highlight the mouseover target
//     event.target.style.color = "orange";

// })

function start() {
  var element = document.getElementById("menu");
  element.tipo = creaNodo('p');
  element.style.backgroundColor = "aqua";
  element.style.width = "100px";
  element.style.height = "100px";
  element.style.border = "1px solid #000";
  element.newColor = "red";
  element.addEventListener("click", menuHover);
}

function menuHover() {
  this.style.backgroundColor = this.newColor;
  this.style.border = "none";
}

function numRamdon(min, max) {
  Math.floor(Math.random() * (max - min)) + min;
}

// function showText(){
//     var text = document.getElementById("texto");

// }

// document.body.onload = addElement;

// function addElement () {
//   // crea un nuevo div
//   // y añade contenido
//   var newP = document.createElement("p");
//   var newContent = document.createTextNode("Hola!¿Qué tal?");
//   newP.appendChild(newContent); //añade texto al div creado.

//   // añade el elemento creado y su contenido al DOM
//   var currentDiv = document.getElementById("menu2");
//   document.body.insertBefore(newP, currentDiv);
// }

function creaNodo(tipo){
	var ele=document.createElement(tipo);
	document.body.appendChild(ele);	// posicionarlo en DOM 
	return ele;	// lo retornamos para trabajar con el
}