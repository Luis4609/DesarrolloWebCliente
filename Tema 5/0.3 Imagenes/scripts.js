const request = new XMLHttpRequest();
request.open(
  "GET",
  "https://api.generated.photos/api/v1/faces?api_key=9WfidX1--v7zbsrcK8PneA",
  true
); 

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    const data = JSON.parse(this.response);

    const contenedor = document.getElementById("contenedor");
    contenedor.setAttribute("class", "card-columns");

    data.forEach((datos) => {
      // Creamos una tarjeta
      const tarjeta = document.createElement("div");
      tarjeta.setAttribute("class", "card");
      tarjeta.setAttribute("id", datos.id);

      const datosApi = document.createElement("img");
      datosApi.setAttribute("src", datos.faces[0].urls[2][64]);

      // Agregamos la tarjeta
      contenedor.appendChild(tarjeta);
      tarjeta.appendChild(datosApi);
    });
  } else {
    const contenedor = document.getElementById("contenedor");
    const mensajeError = document.createElement("div");

    mensajeError.setAttribute("class", "alert alert-danger");
    mensajeError.textContent = `Ha ocurrido un error con código ${request.status}`;

    contenedor.appendChild(mensajeError);
  }
};

request.send();
