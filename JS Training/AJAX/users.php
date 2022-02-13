<?php

$conn = mysqli_connect('localhost', 'root', 'root', 'ajaxtest');

$query = 'SELECT * FROM user';

$result = mysqli_query($conn, $query);

$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

//Convert into a json
echo json_encode($users);