<?php
//stabilisco i permessi di lettura del file (anyone)
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
// definisco il metodo consentito per la request
header('Access-Control-Allow-Headers: *');
require("config.php");

$index = $_GET["index"];

$query = "DELETE FROM items WHERE id_item = $index";

$result = mysqli_query($db,$query);

    if($result){
        echo json_encode(["return" => true, "index" => "Eliminato item " . $index]);
       
    } else {
        //error_log($query);
        echo json_encode(["return" => false, "index" => "NON è stato eliminato l'item " .$index]);
    }

?>
