<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

$server="localhost";
$username="root";
$password="root";
$database="lista_mare_22";

$db = mysqli_connect($server,$username,$password,$database);

if($db->connect_error){
    die("Errore nella connessione: ".mysqli_connect_error());
} 

?>