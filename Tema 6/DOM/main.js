window.onload = function () {
  //Obtener el document HTML
  var docHtml = document.documentElement;
  //Mostrar el HTML
  var ele = crearCaja("div");
  ele.innerHTML = docHtml.tagName;
  //Hijos de HTML
  var docHijos = docHtml.childNodes;
  //Recorrer los hijos
  for (var i = 0; i < docHijos.length; i++) {
    //Generar elemento para representar los hijos de HTML
    var elemento = crearCaja("div");
    elemento.innerHTML = docHijos[i].tagName;
    //Recoger los nietos
    var child = docHijos[i].childNodes;
    console.log(child);
    console.log(child.length);
    for (var j = 0; j < 10; j++) {
      if (typeof child[j].tagName !== "undefined" && child[j].length !== 0) {
        var elem = crearCaja("div");
        elem.innerHTML = child[j].tagName;
      }
    }
  }
};
function crearCaja(tipo) {
  var ele = document.createElement(tipo);
  document.body.appendChild(ele);
  ele.style.border = "1px solid black";
  return ele;
}