import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';


class Login extends Component {

    //the state of the login form
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            message: null,
            visible: "hidden",
            color:null
        };
    }


    //form submit handler method
    tryLogin(event){
        event.preventDefault();
        
        axios({
            method: 'post',
            url: 'http://localhost/lista-mare/api/login.php',
            headers: {'content-type':'application/json'},
            data: this.state
        })
        .then(response => {
            if (response.data.login) {

               sessionStorage.setItem("username", response.data.utente)
               sessionStorage.setItem("isUserLogged", true)
               this.forceUpdate()
               
            } else {
                this.setState({
                    message: response.data.message,
                    visible: "visible",
                    color: "#ff938f"
                })
            }
        })
            .catch(error => this.setState({ message: error.message}));
    }

    //how to send data from react to php api
    //install axios using npm, it works well with http requests

    deleteSession(){
        sessionStorage.removeItem("username")
        sessionStorage.removeItem("isUserLogged")

        this.setState({
            username: "",
            password: ""
        })
        
        this.forceUpdate()
    }

    render() {

        var usernameEsiste = sessionStorage.getItem("username")
        var utenteLoggato = sessionStorage.getItem("isUserLogged")
        
        if (usernameEsiste === null && utenteLoggato === null) {

            return (

            <div>
                <form action="#">
                    <label>Username</label><br />
                    <input type="text" id="username" name="username"
                        value={this.state.username}
                        onChange={(e) => this.setState({ username: e.target.value })}
                        require />
                    <br />
                    <label>Password</label><br />
                    <input type="password" id="passowrd" name="password"
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                        required />
                    <br />
                    <input type="submit" id="send" value="Login" className="faiLogin"
                        onClick={(e) => this.tryLogin(e)} />
                    
                </form>
                
                <p className="error" style={{visibility:this.state.visible, backgroundColor:this.state.color}}>{this.state.message}</p>

            </div>
        );

        } else {

            return(
                    <div>
                        <p>
                            utente: {sessionStorage.getItem("username")}
                        </p>
                    <p className="error" style={{ visibility: 'visible'}}
                    >
                        <button type="button" className="cancel">
                            <Link to="/dashboard">GO TO DASHBOARD</Link>
                            </button>
                    </p>
                        <button type="button" className='cancel' onClick={() => this.deleteSession()}>LOGOUT</button>
                    <br/><br/>
                    </div>
                    
            );
        
        }
    }
}
export default Login;