function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const container = document.getElementById("contenedor");
const url =
  "https://api.generated.photos/api/v1/faces?api_key=3J9uZOJNEdDFZyIQCKNfLQ";

fetch(url)
  //Convert fetch(url) in JSON
  .then((resp) => resp.json())
  //Promise resolve
  .then(function (data) {
    let images = data.faces;
    return images.map(function (image) {
      let div = createNode("div");
      let img = createNode("img");
      // let span = createNode("span");

      img.src = image.urls[2][64];
      // span.innerHTML = `${image.name.first} ${image.name.last}`;

      append(div, img);
      append(container, div);
    });
  })
  //Promise reject
  .catch(function (error) {
    console.log(error);
  });
