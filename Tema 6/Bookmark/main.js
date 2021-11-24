
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
var removeItem = document.getElementById("remove");

function drop(ev) {
  ev.preventDefault();
  var removeItem = document.getElementById("remove");
  var data = ev.dataTransfer.getData("text");  //Obtengo el id del objeto MOVIDO
  // ev.target.appendChild(document.getElementById(data));
  ev.target.removeChild(document.getElementById(data));
  // removeItem.removeChild(document.getElementById(data));
}
