<?php
//stabilisco i permessi di lettura del file (anyone)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
// definisco il metodo consentito per la request
header("Access-Control-Allow-Headers: *");
require("config.php");


$request = json_decode(file_get_contents("php://input"), true);

if(isset($request) && !empty($request)){

    $username = $request["username"];
    $password = $request["password"];
  

    if(empty($username) && empty($password)) die();

    $query = "SELECT * FROM users WHERE username = '$username'";
    $result = mysqli_query($db,$query);

    if(mysqli_num_rows($result) >= 1){
        $row = mysqli_fetch_assoc($result);
        if($password === $row['password']){
 
            session_start();
            echo json_encode(["login" => true, "message" => "Trovato risultato in db con nome " . $username, "utente" => $username]);
            //header('Location: http://localhost:3000/dashboard');
        } else {
            echo json_encode(["login" => false, "message" => "Reinserire le credenziali" . $username]);
        }
    
        
    } else {
        echo json_encode(["login" => false, "message" => "Credenziali sbagliate" . $username]);
    }

} else {
    echo json_encode(["login" => false, "message" => "Non sono arrivati i dati che hai inviato"]);
}



?>

