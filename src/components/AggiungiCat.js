import { Component } from 'react';
import axios from 'axios';
import '../App.css';


class AggiungiCat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nomecategoria: "",
            descrizione: ""
        }

    
    }


    catAggiungi() {
        axios.get('http://localhost/lista-mare/api/catAggiungi.php?categoria=' + this.state.nomecategoria + '&descrizione=' + this.state.descrizione )
            .then(response => {

                if (response.data.return) {
                    console.log("aggiunto")
                    this.setState({
                        nomecategoria: "",
                        descrizione: ""
                    })
                } else {
                    console.log(response.data)
                    this.setState({
                        nomecategoria: "",
                        descrizione: ""
                    })
                }
            })
    }


    render() {
        var usernameEsiste = sessionStorage.getItem("username")
        var utenteLoggato = sessionStorage.getItem("isUserLogged")

        if (usernameEsiste === null && utenteLoggato === null) {

            return false;

        } else {
            return (

                <div>

                    <form action="#" className={this.props.stile}>
                        <span style={{ fontWeight: 'bold' }}>AGGIUNGI CATEGORIA</span><br />
                        <label>Nome Categoria</label><br />
                        <input type="text" id="categoria" name="categoria"
                            value={this.state.nomecategoria}
                            maxLength="20"
                            onChange={(e) => this.setState({ nomecategoria: e.target.value })}
                            className="inputAggiungi"
                            required />
                        <br />

                        <label>Descrizione</label><br />
                        <input type="text" id="descrizione" name="descrizione"
                            value={this.state.descrizione}
                            maxLength="50"
                            onChange={(e) => this.setState({ descrizione: e.target.value})}
                            className="inputAggiungi"
                            />

                        <br/><br/>
                        <button type="button" className="aggiungi"
                            onClick={() => this.catAggiungi()}>AGGIUNGI</button>

                    </form>

                </div>
            );
        }


    }
}
export default AggiungiCat;