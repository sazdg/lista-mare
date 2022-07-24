import { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { ReactSession } from 'react-client-session';


class Aggiungi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            categoria: "",
            preso: "nonpreso",
            usato: "nonusato"
        }
    }

    componentDidMount(){
        this.getCategorie()
    }

    CbxPreso() {
        if (this.state.preso === "nonpreso"){
            this.setState({ preso: "preso"})
        } else {
            this.setState({ preso: "nonpreso"})
        }
    }

    CbxUsato() {
        if (this.state.usato === "nonusato") {
            this.setState({ usato: "usato" })
        } else {
            this.setState({ usato: "nonusato"})
        }
    }

    itemAggiungi() {
        axios.get('http://localhost/lista-mare/api/itemAggiungi.php?nome=' + this.state.nome + '&categoria=' + this.state.categoria + '&preso=' + this.state.preso + '&usato=' + this.state.usato)
            .then(response => {

                if (response.data.return) {
                    console.log(response.data)
                } else {
                    console.log(response.data)
                }
            })
    }

    getCategorie(){
        axios.get('http://localhost/lista-mare/api/getCategorie.php')
            .then(response => {
                console.log(response.data)

                if (response.data.return) {
                    const categorie = []
                    response.data.categorie.forEach((element) => {
                        categorie.push({id: element.id, categoria: element.cat})
                    })


                } else {
                    console.log(response.data)
                }
            })
    }

    render() {
        if (ReactSession.get("username") === "" || ReactSession.get("username") == null) {

            return false;

        } else {
            return (

                <div>
                    <p>Aggiungi un item</p>
                    <form action="#">
                        <label>Nome</label><br />
                        <input type="text" id="nome" name="nome"
                            value={this.state.nome}
                            onChange={(e) => this.setState({ nome: e.target.value })}
                            require />
                        <br />

                        <label>Categoria</label><br />
                        <input type="text" id="categoria" name="categoria"
                            value={this.state.categoria}
                            onChange={(e) => this.setState({ categoria: e.target.value })}
                            required />

                        <br />
                        <input type="checkbox" value={this.state.preso}
                            onClick={() => this.CbxPreso()} />PRESO
                        <input type="checkbox" value={this.state.usato}
                            onClick={() => this.CbxUsato()} />USATO
                        <br/>
                        <button type="button" className="aggiungi"
                            onClick={() => this.itemAggiungi()}>Aggiungi</button>

                    </form>

                </div>
            );
        }

        
    }
}
export default Aggiungi;