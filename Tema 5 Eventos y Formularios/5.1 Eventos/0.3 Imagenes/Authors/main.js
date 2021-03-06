var idNode = 0;

function createNode(element) {
  var node = document.createElement(element);
  node.idNode = idNode++;
  node.classList.add("node-img");
  node.setAttribute("tabindex", 1);
  node.addEventListener("click", selectImage);
  node.addEventListener("onmouseover", resalta);
  node.addEventListener("onmouseout", resalta);
  node.addEventListener("keydown", function (event) {
    // ENTER detectado
    if (event.keyCode == 13 || (event.keyCode == 9 && node.selected == true)) {
      // Código para la tecla ENTER
      console.log("Oprimiste la tecla ENTER o TAB");
      this.style.border = "5px solid red";
      this.isSelected = true;
    }
    // TAB detectado
    if (event.keyCode == 9) {
      // Código para la tecla TAB
      console.log("Oprimiste la tecla TAB");
      if (!this.isSelected) {
        this.style.border = "5px solid green";
      }
    }
    //Move with arrow keys
    if (event.keyCode === 37 && node.selected == true) {
      this.left = true;
      this.style.border = "5px solid red";
      if (this.idNode != 0) {
        this.previousSibling.style.border = "5px solid yellow";
      }
    }
    // only one key per event
    if (event.keyCode === 38) {
      this.up = true;
      this.style.border = "5px solid red";
    }
    // so check exclusively
    if (event.keyCode === 39) {
      this.right = true;
      this.style.border = "5px solid red";
      if (this.idNode != 99) {
        this.nextSibling.style.border = "5px solid yellow";
      }
    }
    if (event.keyCode === 40) {
      this.down = true;
      this.style.border = "5px solid red";
    }
  });
  node.addEventListener("onkeyup", function (event) {
    var kc = e.keyCode;
    e.preventDefault();

    if (kc === 37) Keys.left = false;
    else if (kc === 38) Keys.up = false;
    else if (kc === 39) Keys.right = false;
    else if (kc === 40) Keys.down = false;
  });
  return node;
}

function append(parent, el) {
  return parent.appendChild(el);
}

function selectImage() {
  this.style.border = "5px solid yellow";
  this.selected = true;
  console.log("selected");
}

function resalta(elEvento) {
  var evento = elEvento || window.event;
  switch (evento.type) {
    case "mouseover":
      this.style.borderColor = "black";
      break;
    case "mouseout":
      this.style.borderColor = "silver";
      break;
  }
}

const container = document.getElementById("authors");
const url = "https://randomuser.me/api/?results=100";

fetch(url)
  //Convert fetch(url) in JSON
  .then((resp) => resp.json())
  //Promise resolve
  .then(function (data) {
    let authors = data.results;
    return authors.map(function (author) {
      let div = createNode("div");
      let img = createNode("img");
      let span = createNode("span");

      img.src = author.picture.large;
      span.innerHTML = `${author.name.first} ${author.name.last}`;

      append(div, img);
      append(div, span);
      append(container, div);
    });
  })
  //Promise reject
  .catch(function (error) {
    console.log(error);
  });
