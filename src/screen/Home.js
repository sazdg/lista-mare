import React from "react";
import '../App.css';


function Home() {
    return (
        <div className="homepage">
            <h1>PACKING CHECKLIST</h1>
            <p>Welcome!</p>
            <span>
                N accounts<br/>
                1 list
            </span>
            <div style={{visibility: 'hidden'}}>
                <p>footer</p>
                <p>bug quando metti il filtro e poi clicchi usato</p>
                <p>feedback quando si aggiunge item o categoria</p>
                <p>pagina di registrazione nuovo utente</p>
                <p>create table con nuova lista per l'utente</p>
            </div>
            
        </div>
    );
}

export default Home;