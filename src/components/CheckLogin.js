import { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


class CheckLogin extends Component {

    //the state of the login form
    constructor(props) {
        super(props);
        this.state = {
            log: null,
            visible: "hidden"
        };
    }

    componentDidMount() {
        
        var usernameEsiste = sessionStorage.getItem("username")
        var utenteLoggato = sessionStorage.getItem("isUserLogged")
        
        if (usernameEsiste == null || utenteLoggato == null) {

                let element = <Link to="/accedi" className="goto">Fai il login per vedere la pagina</Link>
                this.setState({
                    log: element,
                    visible: "visible"
                })
            } else {
                this.setState({
                    log: usernameEsiste,
                    visible: "visible"
                })
            }


    }

    render() {

        return (

            <div>
                <p style={{visibility:this.state.visible}}>{this.state.log}</p>
            </div>
        );
    }
}
export default CheckLogin;