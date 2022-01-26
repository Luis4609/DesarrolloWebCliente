function createNode(element) {
  var node = document.createElement(element);
  node.classList.add("node-img");
  node.addEventListener("click", focus);
  return node;
}

function append(parent, el) {
  return parent.appendChild(el);
}

function focus() {
  this.style.border = "5px solid yellow";
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
