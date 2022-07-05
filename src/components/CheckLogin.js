import { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';


class CheckLogin extends Component {

    //the state of the login form
    constructor(props) {
        super(props);
        this.state = {
            log: null,
            visible: "hidden",
        };
    }

    //TODO non funziona l'assegnazione della var 
    componentDidMount() {

        axios.get('http://localhost/lista-mare/api/checkLogin.php')
            .then(response => {
                console.log(response.data)
                if (response.data.login) {
                    this.setState({
                        log: "todo okay",
                        visible: "visible",
                        color: "#90e991"
                    })

                } else {
                    let element = <Link to="/accedi" className="link">Fai il login per vedere la pagina</Link>
                    this.setState({
                        log: element,
                        visible: "visible",
                        color: "#ff938f"
                    })
                }
            })
            .catch(error => this.setState({ log: error.message }));
    }


    

    //how to send data from react to php api
    //install axios using npm, it works well with http requests


    render() {

        return (

            <div>
                <p style={{visibility:this.state.visible}}>{this.state.log}</p>
                
            </div>
        );
    }
}
export default CheckLogin;