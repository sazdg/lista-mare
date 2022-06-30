import { Component } from 'react';
import axios from 'axios';
import '../App.css';


class Login extends Component {

    //the state of the login form
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            sent: false,
            error: null
        };
    }

    //form submit handler method
    // tryLogin(event){
    //     event.preventDefault();
    //     console.log(this.state);
    //     axios({
    //         method: 'post',
    //         url: 'http://localhost:3000/api-server/api/index.php',
    //         headers: {'content-type':'application/json'},
    //         data: this.state
    //     })
    //     .then(result => {
    //         this.setState({
    //             sent: result.data.sent
    //         })
    //     })
    //     .catch(error => this.setState({ error: error.message}));
    // }

    tryLogin(event) {
        event.preventDefault();
        console.log(this.state);

        axios.get('http://localhost:3000/api/index.php')
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            });

    }

    //how to send data from react to php api
    //install axios using npm, it works well with http requests


    render() {
        //const for api path
        //const PATH = "http://localhost/api-server/api/index.php";
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
                        onClick={e => this.tryLogin(e)} />
                </form>

            </div>
        );
    }
}
export default Login;