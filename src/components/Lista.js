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
            color: null
        };
    }

    componentDidMount(){
        this.LoadLista()
    }
    LoadLista() {

        var element = ""

        if (ReactSession.get("username") === "" || ReactSession.get("username") == null){

            this.setState({
                log: <CheckLogin />
            })
            
    
        
        } else {
            axios.get('http://localhost/lista-mare/api/lista.php')
                .then(response => {
                    console.log(response.data)

                    element = <div></div>
                    if (response.data.return) {
                        for(let i = 0; i < response.data.item.lenght; i++){
                            element += <input type="checkbox" name={response.data.item[i]} value={response.data.item[i]}>{response.data.item[i]}</input>
                        }
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

    
    
    render() {


        return (

            <div>

                <p>{this.state.log}</p>

            </div>
        );
    }
}
export default Lista;