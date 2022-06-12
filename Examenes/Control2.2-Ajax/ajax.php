<?php

if (isset($_GET['json'])) {
    $receiveData =  $_GET['json'];

    $arraySleep = json_decode($receiveData);
    usleep($arraySleep[1] * 1000);

    echo $receiveData;
} else {
    echo 'http: 400';
}
