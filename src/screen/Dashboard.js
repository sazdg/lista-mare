import React from "react";
import '../App.css';
import { ReactSession } from 'react-client-session';


function Dashboard() {
    const username = ReactSession.get("username")


    //TODO se sei loggato vedi la pagina, altrimenti messaggio "fai il login"
    return (
        <div className="dashboard">
            <h1>LA TUA LISTA</h1>
                <p>Username is: {username}</p>
        </div>
    );
}

export default Dashboard;