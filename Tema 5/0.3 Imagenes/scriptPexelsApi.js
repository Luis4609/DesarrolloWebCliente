const request = new XMLHttpRequest();
request.open(
  "GET",
  "https://api.pexels.com/v1/search?query=people&page=2&per_page=50?api_key=563492ad6f91700001000001a4c79d975c9240afa011f7598bcd6ee5",
  true
); 

// https://api.pexels.com/v1/search?query=people&page=2&per_page=50

// https://api.pexels.com/v1/?api_key=563492ad6f91700001000001a4c79d975c9240afa011f7598bcd6ee5
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
      datosApi.setAttribute("src", datos.faces[0].url[1][64]);

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
