import { Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
    return (
            <nav>
                 <Link to="/" className="link">Home</Link>
                 <Link to="/accedi" className="link">Accedi</Link>
            </nav>
    )
};

export default Layout;