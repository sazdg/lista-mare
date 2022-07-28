import { Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
    return (
            <nav>
                 <Link to="/" className="link">HOME</Link>
                 <Link to="/accedi" className="link">ACCOUNT</Link>
                 <Link to="/dashboard" className="link">CHECKLIST</Link>
            </nav>
    )
};

export default Layout;