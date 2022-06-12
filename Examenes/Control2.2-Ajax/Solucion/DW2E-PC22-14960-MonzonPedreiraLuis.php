<?php

if ($_REQUEST) {
    //Recibir datos json desde JS
    if (isset($_GET['json'])) {
        $data = $_GET['json'];
    }
    //Sleep de 1s
    //sleep(1);
    //parar la ejecucion del envio desde PHP a JS => 1000 microsegundos
    usleep(10000);
    // echo  "a: " . $data[0] . " b: " . $data[1];
    echo $data;

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
        var a = [7, 8, 4, 6, 5, 4, 3, 2, 1];
        var b = [10, 500, 200, 1000, 200, 300, 400, 200, 300];

        // variable para iterar entre los arrays
        var iter = 0;
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
                    let response = JSON.parse(this.responseText)
                    let output = `recibido: a=${response[0]} tiempo: ${printTime()} <br/>`;
                    document.body.innerHTML += output;
                    console.log(this.responseText)
                }
                if (iter > a.length - 2) return;
                iter += 1;
                sendData();
            }
            xhr.send();

            output = `${iter}: enviado a=${a[iter]} + b=${b[iter]} y el tiempo: ${printTime()} <br/>`;
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