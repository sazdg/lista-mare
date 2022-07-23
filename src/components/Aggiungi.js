import { Component } from 'react';
import '../App.css';
import { ReactSession } from 'react-client-session';


class Aggiungi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            categoria: "",
            preso: "nonpreso",
            usato: "nonusato"
        }
    }

    itemAggiungi() {
        console.log(this.state)
    }

    render() {
        if (ReactSession.get("username") === "" || ReactSession.get("username") == null) {

            return false;

        } else {
            return (

                <div>
                    <p>Aggiungi un item</p>
                    <form action="#">
                        <label>Nome</label><br />
                        <input type="text" id="username" name="username"
                            value={this.state.nome}
                            onChange={(e) => this.setState({ nome: e.target.value })}
                            require />
                        <br />
                        <label>Categoria</label><br />
                        <input type="text" id="passowrd" name="password"
                            value={this.state.categoria}
                            onChange={(e) => this.setState({ categoria: e.target.value })}
                            required />
                        <br />
                        <button type="button" className="aggiungi"
                            onClick={() => this.itemAggiungi}>Aggiungi</button>

                    </form>

                </div>
            );
        }

        
    }
}
export default Aggiungi;