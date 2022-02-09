<?php

$aCarrito = array();
$sHTML = '';
$fPrecioTotal = 0;

//Vaciamos el carrito
if (isset($_GET['vaciar'])) {
    unset($_COOKIE['carrito']);
}

//Obtenemos los productos anteriores
if (isset($_COOKIE['carrito'])) {
    $aCarrito = unserialize($_COOKIE['carrito']);
}

//Anyado un nuevo articulo al carrito
if (isset($_GET['nombre']) && isset($_GET['precio'])) {
    $iUltimaPos = count($aCarrito);
    $aCarrito[$iUltimaPos]['nombre'] = $_GET['nombre'];
    $aCarrito[$iUltimaPos]['precio'] = $_GET['precio'];
}

// //Creamos la cookie (serializamos)
// $iTemCad = time() + (60 * 60);
// setcookie('carrito', serialize($aCarrito), $iTemCad);



//Imprimimos el contenido del array
foreach ($aCarrito as $key => $value) {
    $sHTML .= '-> ' . $value['nombre'] . ' ' . $value['precio'] . '<br>';
    $fPrecioTotal += $value['precio'];
}

//Imprimimos el precio total
$sHTML .= '<br>------------------<br>Precio total: ' . $fPrecioTotal;

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrito de la compra</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
    <div class="container">
        <div class="row">
            <!-- Elementos generados a partir del JSON -->
            <main id="items" class="col-sm-8 row"></main>
            <!-- Carrito -->
            <aside class="col-sm-4">
                <h2>Carrito</h2>
                <!-- Elementos del carrito -->
                <ul id="carrito" class="list-group"></ul>
                <hr>
                <!-- Precio total -->
                <p class="text-right">Total: <span id="total"></span>&euro;</p>
                <button id="boton-vaciar" class="btn btn-danger">Vaciar</button>
            </aside>
        </div>
    </div>
    <script src="main.js"></script>
</body>

</html>