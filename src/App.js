import './App.css'
import Footer from './components/Footer.js'
import Login from './components/Login.js'
import Pagine from './routes/Pagine.js'
import Accedi from './screen/Accedi.js'


//qui ci deve stare il template, quindi footer sicuro e navbar
//poi pagine per fare il routing
function App() {
  return (
    <div className="App">
      <h1>LISTA MARE</h1>
      <Pagine />
      <Footer />
    </div>
  );
}

export default App;
