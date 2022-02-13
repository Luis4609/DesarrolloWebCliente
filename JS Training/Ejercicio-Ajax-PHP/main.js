//Datos iniciales
var a = [7, 8, 4, 6, 5, 4, 3, 2, 1];
var b = [10, 500, 200, 1000, 200, 300, 400, 200, 300];
// var a = [9, 8, 7, 6, 5, 4, 3];
// var b = [100, 200, 100, 200, 100, 200, 100];

function createNode(tag) {
  var node = document.createElement(tag);
  return node;
}

function appendNode(parent, child) {
  return parent.appendChild(child);
}

function sendData(){
    
}

function printNums() {
  //Peticion ajax
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "", true);
  xhr.onload = () => {
    if (this.status == 200) {
      console.log(this.responseText);
    }
  };
  xhr.send();
}
