<?php
//stabilisco i permessi di lettura del file (anyone)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
// definisco il metodo consentito per la request
header("Access-Control-Allow-Headers: *");
require("config.php");

$query = "SELECT * FROM mare";
$result = mysqli_query($db,$query);
echo json_encode($result);

    if(mysqli_num_rows($result) >= 1){
        $row = mysqli_fetch_assoc($result);
        //echo json_encode($result);
    }

?>