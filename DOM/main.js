window.onload = function () {
  var docHtml = document.documentElement;
  var docHijos = docHtml.childNodes;

  for (var i = 0; i < docHijos.length; i++) {
    //Generar elemento para representar los hijos de HTML
    var elemento = document.createElement("p");
    elemento.innerHTML = docHijos[i].tagName;
    document.body.appendChild(elemento);
    //Recoger los nietos
    var child = docHijos[i].childNodes;
    for (var j = 0; j < child.length; j++) {
      var elementoHijo = document.createElement("p");
      elementoHijo.innerHTML = child[j].tagName;
      document.body.appendChild(elementoHijo);
    }
  }
};
