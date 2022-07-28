<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
require("config.php");

$cat = $_GET["categoria"];
$desc = $_GET["descrizione"];

$query = "INSERT INTO categorie (categoria, descrizione) VALUES ('$cat', '$desc')"; 

$result = mysqli_query($db,$query);

    if($result){
        echo json_encode(["return" => true, "index" => "Aggiunta categoria " . $cat]);
       
    } else {
        echo json_encode(["return" => false, "index" => "NON è stata aggiunta la categoria  " . $cat]);
    }

?>
