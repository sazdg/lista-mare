import './App.css'
import Footer from './components/Footer.js'
import Pagine from './routes/Pagine.js'


//qui ci deve stare il template, quindi footer sicuro e navbar
//poi pagine per fare il routing
function App() {
  return (
    <div className="App">
      <Pagine />
      <Footer />
    </div>
  );
}

export default App;
