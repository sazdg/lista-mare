import React from "react";
import '../App.css';
import Aggiungi from '../components/Aggiungi.js';
import AggiungiCat from '../components/AggiungiCat.js';


function AddThings() {

    return (
        <div className="addThings">
            <h2>AGGIUNGI COSE</h2>
            <div className="box">
                <Aggiungi stile="box-dx" />
                <AggiungiCat stile="box-sx" />
            </div>
        </div>
    );
}

export default AddThings;