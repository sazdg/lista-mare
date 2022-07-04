import React from "react";
import '../App.css';
import CheckLogin from '../components/CheckLogin.js';


function Dashboard() {

    //TODO se sei loggato vedi la pagina, altrimenti messaggio "fai il login"
    return (
        <div className="dashboard">
            <h1>LA TUA LISTA</h1>
            <CheckLogin />
        </div>
    );
}

export default Dashboard;