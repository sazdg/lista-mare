<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

session_start();

if(isset($_SESSION["user"])){
    echo json_encode(["login" => true, "sessione "=> $_SESSION["user"]]);
} else {
    echo json_encode(["login" => false, "sessione" => $_SESSION["user"]]);
}
?>