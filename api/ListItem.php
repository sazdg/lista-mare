<?php
//non usato
require("./config.php");

class ListItem {
    private $nomeLista;
    private $item;
    private $conn;

    public function __construct($db){
        this->conn = $db;
    }

    public function getNomeLista(){
        return this->$nomeLista;
    }

    public function read(){
       
        $query = "SELECT * FROM items";
        $result = mysqli_query($conn,$query);

        if(mysqli_num_rows($result) >= 1){
            $row = mysqli_fetch_assoc($result);
            return $row;
        } else {
            return false;
        }

    }

}
?>