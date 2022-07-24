<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
require("config.php");

$query = "SELECT id_categorie, categoria FROM categorie ORDER BY id_categorie"; 

$result = mysqli_query($db,$query);

    if(mysqli_num_rows($result) > 0){
        $categorie = array();

        while($row = mysqli_fetch_array($result)){
            $x = array(
                "id" => $row["id_categorie"],
                "cat" => $row["categoria"]
            );
            array_push($categorie, $x);
        }

        echo json_encode(["return" => true, "categorie" => $categorie]);
       
    } else {
        echo json_encode(["return" => false]);
    }

?>
