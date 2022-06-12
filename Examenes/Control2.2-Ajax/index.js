var a = [7, 8, 4, 6, 5, 4, 3, 2, 1];
var b = [10, 500, 200, 1000, 200, 300, 400, 200, 300];

function sendData(iter) {
  if (iter >= a.length) {
    return;
  }
  var xhr = new XMLHttpRequest();

  let dateEnviado = new Date();

  //Datos para enviar al servidor => convertir en JSON
  var datos = [a[iter], b[iter]];
  var texto = JSON.stringify(datos);

  xhr.open("GET", "http://localhost:3000/Examenes/Control-Ajax/enunciado/ajax.php?json=" + texto, true);
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
      let response = JSON.parse(this.responseText);

      let dateRecibido = new Date();
      let output = `recibido: a=${
        response[0]
      } tiempo: ${dateRecibido.getHours()}:${dateRecibido.getMinutes()}:${dateRecibido.getSeconds()} <br/>`;
      document.body.innerHTML += output;
      console.log(this.responseText);
    }
    sendData(iter + 1);
  };
  xhr.send();

  output = `${iter}: enviado a=${a[iter]} + b=${
    b[iter]
  } y el tiempo: ${dateEnviado.getHours()}:${dateEnviado.getMinutes()}:${dateEnviado.getSeconds()} <br/>`;
  document.body.innerHTML += output;
}

sendData(0);
