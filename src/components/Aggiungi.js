import { Component } from 'react';
import axios from 'axios';
import '../App.css';


class Aggiungi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            categoria: "",
            preso: "nonpreso",
            usato: "nonusato",
        }

        const cat = []
        this.categorie = {
            cat
        }
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
                    console.log("aggiunto")
                } else {
                    console.log(response.data)
                }
            })
    }

    getCategorie(){
        axios.get('http://localhost/lista-mare/api/getCategorie.php')
            .then(response => {
                if (response.data.return) {

                    for (let i = 0; i < response.data.categorie.length; i++){
                        let id = response.data.categorie[i].id
                        let nome = response.data.categorie[i].cat
                        this.categorie.cat.push({id: id, categoria: nome})
                    }

                } else {
                    console.log(response.data)
                }
            })
    }

    render() {
        var usernameEsiste = sessionStorage.getItem("username")
        var utenteLoggato = sessionStorage.getItem("isUserLogged")

        if (usernameEsiste == null || utenteLoggato == null) {

            return false;

        } else {
            return (

                <div>
                    
                    <form action="#" className="styleAggiungi">
                        <span style={{fontWeight: 'bold'}}>AGGIUNGI UN ITEM</span><br/>
                        <label>Nome</label><br />
                        <input type="text" id="nome" name="nome"
                            value={this.state.nome}
                            maxLength="50"
                            onChange={(e) => this.setState({ nome: e.target.value })}
                            className="inputAggiungi"
                            required />
                        <br />

                        <label>Categoria</label><br />
                        <select
                            name="categorie"
                            id="categoria"
                            value={this.state.categoria}
                            onChange={(e) => this.setState({ categoria: e.target.value })}
                            className="inputAggiungi"
                            required >
                            <option value="NULL"
                                defaultInputValue="defaultInputValue"> Scegli la categoria
                            </option>

                            {this.categorie.cat.map((element, index) => {
                                return <option  key={index} value={element.id}>
                                    {element.id} - {element.categoria}
                                </option>
                            })}
                        </select>

                        <br />
                        <span className="inputAggiungi"><input type="checkbox" value={this.state.preso} 
                            onClick={() => this.CbxPreso()} /> PRESO</span><br/>
                        <span className="inputAggiungi"><input type="checkbox" value={this.state.usato} 
                            onClick={() => this.CbxUsato()} /> USATO</span>
                        <br/>
                        <button type="button" className="aggiungi"
                            onClick={() => this.itemAggiungi()}>AGGIUNGI</button>

                    </form>

                </div>
            );
        }

        
    }
}
export default Aggiungi;