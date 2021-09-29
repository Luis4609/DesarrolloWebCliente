function iniciarDiv() {
  // crear nodo en el dom
  var ele = creaNodo("div");
  // propiedades del div
  ele.id = "container1";
  ele.innerHTML = "Menu";
  ele.style.backgroundColor = "aqua";
  ele.style.width = "100px";
  ele.style.height = "26px";
  ele.style.border = "1px solid #000";
}

function iniciarP() {
  // crear nodo en el dom
  var ele = creaNodoText("p");
  // propiedades del div
  ele.id = "text1";
  ele.innerHTML = "Hola buenas tardes, aqui me encuentro, debajo del DIV";
}

//Bucle para crear 3 div

function creaNodo(tipo, inner, id) {
  var ele = document.createElement(tipo);
  document.body.appendChild(ele);
  ele.innerHTML = inner;
  ele.id = id; // posicionarlo en DOM
  return ele; // lo retornamos para trabajar con el
}

window.onload = iniciarDiv;
// sin parentesis , al final del head
