<?php
//stabilisco i permessi di lettura del file (anyone)
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
// definisco il metodo consentito per la request
header('Access-Control-Allow-Headers: *');
require("config.php");

$index = $_GET["index"];

$query = "UPDATE items SET usato = CASE WHEN usato = 'nonusato' THEN 'usato' ELSE 'nonusato' END WHERE id_item = $index";

$result = mysqli_query($db,$query);

    if($result){
        echo json_encode(["return" => true, "index" => $index]);
       
    } else {
        //error_log($query);
        echo json_encode(["return" => false, "index" => $index]);
    }

?>
