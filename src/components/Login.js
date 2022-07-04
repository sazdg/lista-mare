import { Component } from 'react';
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
            console.log(response.data)
            if (response.data.login) {
                let element = <Link to="/dashboard" className="link">"Go to Dashboard"</Link>
                
               this.setState({
                message: element,
                visible: "visible",
                color: "#90e991"
               })
               
            } else {
                this.setState({
                    message: response.data.message,
                    visible: "visible",
                    color: "#ff938f"
                })
            }
        })
        .catch(error => this.setState({ error: error.message}));
    }

/*
    tryLogin(event) {
        console.log("click trylogin")
        event.preventDefault()
        
        axios.post("http://localhost/lista-mare/api/login.php", this.state)
            .then((response) => {
                console.log(response.data)
            })
            .catch(error => {
                alert(error.message)
            })

    }
*/
    //how to send data from react to php api
    //install axios using npm, it works well with http requests


    render() {

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
                    <input type="submit" id="send" value="Send it!!"
                        onClick={(e) => this.tryLogin(e)} />
                    
                </form>
                
                <p className="error" style={{visibility:this.state.visible, backgroundColor:this.state.color}}>{this.state.message}</p>

            </div>
        );
    }
}
export default Login;