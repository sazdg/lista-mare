<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");


if(isset($_SESSION["user"])){
    echo json_encode(["login"=>true]);
} else {
    echo json_encode(["login"=>false]);
}
?>