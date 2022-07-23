import { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { ReactSession } from 'react-client-session';
import CheckLogin from './CheckLogin';


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
            risultati: []
        };
    }

    
    componentDidMount(){
        this.LoadLista()
        //every 1 minute
        setTimeout(this.LoadLista(), 2000)
    }



    LoadLista() {
        var rows = []
        

        if (ReactSession.get("username") === "" || ReactSession.get("username") == null){

            this.setState({
                log: <CheckLogin />
            })
        
        } else {
            axios.get('http://localhost/lista-mare/api/lista.php')
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

    }


    ItemPreso(i){
        //console.log("cliccato " + i)
        axios.get('http://localhost/lista-mare/api/itemPreso.php?index=' + i)
            .then(response => {

                if (response.data.return) {
                    console.log(response.data)
                    this.LoadLista()
                } else {
                    console.log(response.data)
                }
            })
    }

    ItemUsato(i) {
        console.log("cliccato " + i)
        axios.get('http://localhost/lista-mare/api/itemUsato.php?index=' + i)
            .then(response => {

                if (response.data.return) {
                    console.log(response.data)
                    this.LoadLista()
                } else {
                    console.log(response.data)
                }
            })
    }
    
    
    render() {
        return (
            <div>

                <p>{this.state.log}</p>
                    {
                    this.state.risultati.map((object, index) => {
                       
                        return (<li key={index} className={object.preso} >
                            {object.item.toUpperCase()} ({object.categoria}) <br /><button type="button" className={object.preso} onClick={() => this.ItemPreso(object.id)}>PRESO</button><button type="button" className={object.usato} onClick={() => this.ItemUsato(object.id)}>USATO</button>
                        </li>)
                

                        })}
                
            </div>
        );
    }
}
export default Lista;