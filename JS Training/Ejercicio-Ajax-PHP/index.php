<?php

if ($_REQUEST) {
    //Recibir datos json desde JS
    // $data = json_decode($_REQUEST['json']);
    if (isset($_GET['json'])) {
        $data = $_GET['json'];
    }
    //Sleep de 1s
    //sleep($data[1] * 1);
    usleep(1000000);
    // echo  "a: " . $data[0] . " b: " . $data[1];
    echo $data;
    // exit = output echo and finish script
    exit;
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio JS</title>
    <script>
        var a = [7, 8, 4, 6, 5, 4, 3, 2, 1];
        var b = [10, 500, 200, 1000, 200, 300, 400, 200, 300];

        var iter = 0;
        // var a = [9, 8, 7, 6, 5, 4, 3];
        // var b = [100, 200, 100, 200, 100, 200, 100];

        function envio() {
            var xhr = new XMLHttpRequest();

            //Datos = convertir en JSON 
            var datos = [a[iter], b[iter]];
            var texto = JSON.stringify(datos);

            xhr.open("GET", "?json=" + texto, true);
            xhr.onload = function() {
                if (this.status == 200) {
                    let response = JSON.parse(this.responseText)
                    let output = `${iter} recibido: a:${response[0]} + b: ${response[1]} y el tiempo: ${tiempo()} <br/>`;
                    document.body.innerHTML += output;
                    console.log(this.responseText)
                }
                if (iter > a.length - 2) return;
                iter += 1;
                envio();
            }
            xhr.send();

            output = `${iter} enviado: a:${a[iter]} + b: ${b[iter]} y el tiempo: ${tiempo()} <br/>`;
            document.body.innerHTML += output;
        }

        function tiempo() {
            var fecha = new Date();
            return (fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds() + ":" + fecha.getMilliseconds());
        }

        window.onload = envio;
    </script>
</head>

<body>

</body>

</html>