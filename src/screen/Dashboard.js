import React from "react";
import '../App.css';
import Lista from "../components/Lista";


function Dashboard() {

    return (
        <div className="dashboard">
            <h1>LA TUA LISTA</h1>
                <Lista />
        </div>
    );
}

export default Dashboard;