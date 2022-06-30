import { Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
    return (
            <nav>
                 <Link to="/" className="link">Home</Link>
                 <Link to="/accedi" className="link">Accedi</Link>
                 <Link to="/dashboard" className="link">Dashboard</Link>
            </nav>
    )
};

export default Layout;