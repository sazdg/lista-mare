<?php
//stabilisco i permessi di lettura del file (anyone)
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
// definisco il metodo consentito per la request
header('Access-Control-Allow-Headers: *');
require("config.php");

$nome = $_GET["nome"];
$categoria = $_GET["categoria"];
$preso = $_GET["preso"];
$usato = $_GET["usato"];

$query = "INSERT INTO items (nome_item, id_categoria, preso, usato) VALUES ('$nome', '$categoria', '$preso', '$usato')"; 

$result = mysqli_query($db,$query);

    if($result){
        echo json_encode(["return" => true, "index" => "Aggiunto " . $nome]);
       
    } else {
        echo json_encode(["return" => false, "index" => "NON è stato aggiunto l'item " . $nome]);
    }

?>
