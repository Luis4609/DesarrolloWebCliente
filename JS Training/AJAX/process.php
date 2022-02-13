<?php

//Connect to a database
$conn = mysqli_connect('localhost', 'root', 'root', 'ajaxtest');

echo 'Processing..';

if(isset($_GET['name'])){
    echo 'GET: Your name is: ' . $_GET['name'];
}

if(isset($_POST['name'])){

    $name = mysqli_real_escape_string($conn, $_POST['name']);
    // echo 'POST: Your name is: ' . $_POST['name'];

    $query = "INSERT INTO user(name) VALUES ('$name')";

    if(mysqli_query($conn, $query)){
        echo 'User added..';
    } else{
        echo 'Error' . mysqli_error($conn);
    }

}

?>