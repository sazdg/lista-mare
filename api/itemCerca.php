<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
require("config.php");

$cerca = $_GET["nome"];

    $query = "SELECT i.id_item, i.nome_item, i.preso, i.usato, i.data_inserimento, c.categoria FROM items i LEFT JOIN categorie c ON c.id_categorie = i.id_categoria WHERE i.nome_item LIKE '%$cerca%' ORDER BY categoria ";

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

        echo json_encode(["return" => true, "trovati" => $lista]);
    } else {
        //error_log($query);
        echo json_encode(["return" => false, "trovati" => "Errore..."]);
    }

?>
