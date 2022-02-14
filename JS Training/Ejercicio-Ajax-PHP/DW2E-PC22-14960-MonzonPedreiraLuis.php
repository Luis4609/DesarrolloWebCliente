<?php

if ($_REQUEST) {
    //Recibir datos json desde JS

    if (isset($_GET['json'])) {
        $data = $_GET['json'];
    }

    //devolver solo el primer elemento del json
    $dataArray = json_decode($data);

    //parar la ejecucion del envio desde PHP a JS => 1000 microsegundos
    //1s = 1000000 microsegundos
    //Hay dos opciones para parar el script de php, la primera sera multiplicar el valor que devolvemos * 100000 microsegundos
    //La segunda será, dormir el script durante 100000 siempre.
    usleep($dataArray[0] * 100000);
    // usleep(100000);

    echo $dataArray[0];

    // exit => output echo and finish script
    exit;
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Examen Desarrollo web cliente: Luis Monzón</title>
    <script>
        //Datos de entrada
        var a = [7, 8, 4, 6, 5, 4, 3, 2, 1];
        var b = [10, 500, 200, 1000, 200, 300, 400, 200, 300];

        // variable para iterar entre los arrays
        var iter = 0;

        //Cambiar los arrays
        // var a = [9, 8, 7, 6, 5, 4, 3];
        // var b = [100, 200, 100, 200, 100, 200, 100];

        function sendData() {
            var xhr = new XMLHttpRequest();

            //Datos para enviar al servidor => convertir en JSON 
            var datos = [a[iter], b[iter]];
            var texto = JSON.stringify(datos);

            xhr.open("GET", "?json=" + texto, true);
            xhr.onload = function() {
                if (this.status == 200) {
                    let response = this.responseText;
                    //mostrar por pantalla los datos recibidos desde el servidor
                    let output = `recibido: a=${response} tiempo: ${printTime()} <br/>`;
                    document.body.innerHTML += output;
                    // console.log(this.responseText)
                }
                if (iter > a.length - 2) return;
                iter += 1;
                sendData();
            }
            xhr.send();

            //mostrar por pantalla los datos enviados al servidor
            output = `${iter}: enviado a=${a[iter]} b=${b[iter]} y el tiempo: ${printTime()} <br/>`;
            document.body.innerHTML += output;
        }

        function printTime() {
            var time = new Date();
            return (time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ":" + time.getMilliseconds());
        }

        window.onload = sendData;
    </script>
</head>

<body>

</body>

</html>