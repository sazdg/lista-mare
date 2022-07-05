import { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { ReactSession } from 'react-client-session';


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

        var element = <div>Fai il login per vedere la lista</div>

        if (ReactSession.get("username") === "" || ReactSession.get("username") == null){

            this.setState({
                log: element
            })

            

        } else {
            axios.get('http://localhost/lista-mare/api/lista.php')
                .then(response => {
                    console.log(response.data)

                    element = <div></div>
                    if (response.data.return) {
                        response.data.item.forEach(coso => {
                            element += <input type="checkbox" name={coso} value={coso}>{coso}</input>
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

    
    
    render() {


        return (

            <div>

                <p>{this.state.log}</p>

            </div>
        );
    }
}
export default Lista;