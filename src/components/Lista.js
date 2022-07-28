import { Component } from 'react';
import axios from 'axios';
import '../App.css';
import CheckLogin from './CheckLogin.js';


class Lista extends Component {

    //the state of the login form
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            message: null,
            visible: "hidden",
            color: null,
            risultati: [],
            cerca: "",
            trovati: "hidden",
            filtro: "id_categoria",
            risultatiCerca: [""]
        };
    }

    
    componentDidMount(){
        this.LoadLista(this.state.filtro)
    }

    componentDidUpdate(_, prevState){
        
        if (this.state.filtro !== prevState.filtro){
            this.LoadLista(this.state.filtro)
        }
    }


    LoadLista(element) {

        element = (element === undefined ? "id_categoria" : element)

        this.setState({
            filtro: element
        })
        
        var rows = []

        axios.get('http://localhost/lista-mare/api/itemLista.php?filtro=' + this.state.filtro)
            .then(response => {
                console.log(response.data)
                

                if (response.data.return) {
                    for (let i = 0; i < response.data.item.length; i++){
                        
                    rows.push({ id: response.data.item[i].id, item: response.data.item[i].item, categoria: response.data.item[i].categoria, preso: response.data.item[i].preso, usato: response.data.item[i].usato })
                    }
                    this.setState({
                        risultati: rows
                    })
                

                } else {
                    this.setState({
                        log: <div>nada</div>,
                        visible: "visible",
                        color: "#ff938f"
                    })
                }
            })
            .catch(error => this.setState({ log: error.message }));

    }


    ItemPreso(i){
        axios.get('http://localhost/lista-mare/api/itemPreso.php?index=' + i)
            .then(response => {

                if (response.data.return) {
                    console.log(response.data)
                    this.LoadLista(this.state.filtro)
                    this.Cerca()
                } else {
                    console.log(response.data)
                }
            })
    }

    ItemUsato(i) {
        axios.get('http://localhost/lista-mare/api/itemUsato.php?index=' + i)
            .then(response => {

                if (response.data.return) {
                    console.log(response.data)
                    this.LoadLista(this.state.filtro)
                    this.Cerca()
                } else {
                    console.log(response.data)
                }
            })
    }

    ItemElimina(i, nome) {

        
        var risposta = window.confirm("Stai per eliminare " + nome + ", sei sicuro?")
        if (risposta){
            axios.get('http://localhost/lista-mare/api/itemEliminato.php?index=' + i)
            .then(response => {

                if (response.data.return) {
                    console.log(response.data)
                    this.LoadLista(this.state.filtro)
                    this.Cerca()
                } else {
                    console.log(response.data)
                }
            })

        } 
        
    }

    Cerca() {
        console.log(this.state.cerca + " da cercare")
        axios.get('http://localhost/lista-mare/api/itemCerca.php?nome=' + this.state.cerca)
            .then(response => {

                if (response.data.return) {
                    this.setState({
                        trovati: "visible"
                    })
                    console.log(response.data.trovati)

                    var ris = []

                    for (let i = 0; i < response.data.trovati.length; i++) {

                        ris.push({ id: response.data.trovati[i].id, item: response.data.trovati[i].item, categoria: response.data.trovati[i].categoria, preso: response.data.trovati[i].preso, usato: response.data.trovati[i].usato })
                    }
                    this.setState({
                        risultatiCerca: ris
                    })
                       
                } else {
                    this.setState({
                        trovati: "visible",
                        risultatiCerca: [""]
                    })
                    console.log(response.data)
                }
            })
    }



    render() {
        

    var usernameEsiste = sessionStorage.getItem("username")
    var utenteLoggato = sessionStorage.getItem("isUserLogged")
        

        if (usernameEsiste === null && utenteLoggato === null) {

        return(
            <div>
                <h1>LA TUA LISTA</h1>
                <CheckLogin />
            </div>
        );

    } else {
        return (
            <div>
                <h2>LISTA_MARE_22
                <button type="button" className="aggiorna" style={{margin: '0 20px'}}onClick={() => this.LoadLista()}>AGGIORNA</button>
                </h2>
                
                <br />

                <div className="boxCerca">
                    <input type="text" className="cerca" placeholder="Cerca..." value={this.state.cerca}
                        onChange={(e) => this.setState({ cerca: e.target.value })}/>
                    <button type="button" className="cerca" onClick={() => this.Cerca()}>CERCA</button>
                    <button type="button" className="cancel" onClick={() => this.setState({trovati: "hidden", risultatiCerca: [""], cerca: ""})}>X</button>
                </div>

                    <div className="risultatiTrovati" style={{ visibility: this.state.trovati }}>
                        {this.state.risultatiCerca.map((object, index) => {

                            if(object === ""){
                                return (<p style={{padding: '0'}}>Nessun risultato...</p>)
                            } else {
                                return (
                                <li key={index} className={object.preso} >
                                    {object.item.toUpperCase()} ({object.categoria})
                                    <br /><button type="button" className={object.preso} onClick={() => this.ItemPreso(object.id)}>PRESO</button>
                                    <button type="button" className={object.usato} onClick={() => this.ItemUsato(object.id)}>USATO</button>
                                    <button type="button" className="cancella" onClick={() => this.ItemElimina(object.id, object.item)}>ELIMINA</button>
                                </li>
                                )

                            }
                        })
                    }
                    </div>
                

                <div className="boxList">
                    <div className="filtri">
                        ORDER BY:  
                        <button type="button" value="nome_item" className="btnFiltro" onClick={() => this.setState({ filtro: "nome_item"})}>A-Z</button>
                        <button type="button" value="id_categoria" className="btnFiltro" onClick={() => this.setState({ filtro: "id_categoria"})}>CATEGORIE</button>
                        <button type="button" value="preso" className="btnFiltro" onClick={() => this.setState({ filtro: "preso"})}>PRESO/NON</button>
                        <button type="button" value="usato" className="btnFiltro" onClick={() => this.setState({ filtro: "usato"})}>USATO/NON</button>
                    </div>

                
                    {
                    this.state.risultati.map((object, index) => {
                       
                        return (<li key={index} className={object.preso} >
                            {object.item.toUpperCase()} ({object.categoria}) 
                            <br /><button type="button" className={object.preso} onClick={() => this.ItemPreso(object.id)}>PRESO</button>
                            <button type="button" className={object.usato} onClick={() => this.ItemUsato(object.id)}>USATO</button>
                            <button type="button" className="cancella" onClick={() => this.ItemElimina(object.id, object.item)}>ELIMINA</button>
                        </li>)
                

                    })}
                </div>
                    
                
            </div>
        );
    }
    
    }
}
export default Lista;