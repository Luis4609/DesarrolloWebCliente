window.onload = function () {
  var docHtml = document.documentElement;
  var ele = document.createElement("p");
  document.body.appendChild(ele);
  ele.innerHTML = docHtml.tagName;
  //Hijos de HTML
  var docHijos = docHtml.childNodes;
  //Recorrer los hijos
  for (var i = 0; i < docHijos.length; i++) {
    for (let j = 0; j < docHijos[i].length; j++) {
      var child = docHijos[i].childNodes;
      var elemento = document.createElement("p");
      document.body.appendChild(elemento);
      elemento.innerHTML = child.tagName;
    }
  }
};
