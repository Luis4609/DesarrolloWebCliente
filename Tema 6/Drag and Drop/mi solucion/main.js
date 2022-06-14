function drag(ev) {
  ev.dataTransfer.setData("id", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();

  var data = ev.dataTransfer.getData("id");
  ev.target.appendChild(document.getElementById(data));
}


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}



// Clean all the tag child elements from contenido container
const clearContentContainer = (parent) => {
    Array.from(parent.children).filter((child) => {
            return child.classList.contains('crema', 'contenedor-child');
        })
        .forEach(elementChild => parent.removeChild(elementChild));
};


//Crear un nodo
function crearNodo(tipo, padre, id, clase, inner) {
  var nodo = document.createElement(tipo);
  if (id != "") {
    nodo.id = id;
  }
  if (clase != "") {
    nodo.className = clase;
  }
  if (inner != "") {
    nodo.innerHTML = inner;
  }
  padre.appendChild(nodo);
  return nodo;
}
