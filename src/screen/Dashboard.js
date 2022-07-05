import React from "react";
import '../App.css';
import { ReactSession } from 'react-client-session';
import CheckLogin from "../components/CheckLogin";


function Dashboard() {
    const username = ReactSession.get("username")

    return (
        <div className="dashboard">
            <h1>LA TUA LISTA</h1>
            
            <p>Sessione:...{username}</p>
                <CheckLogin />
        </div>
    );
}

export default Dashboard;