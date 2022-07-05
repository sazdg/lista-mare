import { Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
    return (
            <nav>
                 <Link to="/" className="link">HOME</Link>
                 <Link to="/accedi" className="link">ACCEDI</Link>
                 <Link to="/dashboard" className="link">DASHBOARD</Link>
            </nav>
    )
};

export default Layout;