<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

$server="localhost";
$username="root";
$password="root";
$database="lista_mare";

$db = mysqli_connect($server,$username,$password,$database);

if($db->connect_error){
    die("Errore nella connessione: ".mysqli_connect_error());
} 

?>