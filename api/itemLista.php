<?php
//stabilisco i permessi di lettura del file (anyone)
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
// definisco il metodo consentito per la request
header('Access-Control-Allow-Headers: *');
require("config.php");

    $query = "SELECT i.id_item, i.nome_item, i.preso, i.usato, i.data_inserimento, c.categoria FROM items i LEFT JOIN categorie c ON c.id_categorie = i.id_categoria ORDER BY categoria";

    $result = mysqli_query($db,$query);

    $lista = array();

    if(mysqli_num_rows($result) >= 1){

        while($row = mysqli_fetch_array($result)){
            $x = array(
                "id" => $row["id_item"],
                "item" => $row["nome_item"],
                "categoria" => $row["categoria"],
                "preso" => $row["preso"],
                "usato" => $row["usato"],
                "data_inserimento" => $row["data_inserimento"]
            );
            array_push($lista, $x);
        }

        echo json_encode(["return" => true, "item" => $lista]);
    } else {
        //error_log($query);
        echo json_encode(["return" => false, "item" => $query]);
    }

?>
