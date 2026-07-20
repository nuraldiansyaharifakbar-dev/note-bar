import logo from "../img/download (12).png";
import '../css/Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar({children}) {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo" />
                    <h2>Note App</h2>
                </div>
               <div className="ton">
                    <button className="btn-tambah">
                        <Link to="/add">Tambah</Link>
                    </button>
                </div>
                
                <ul className="menu">
                   <li><Link to="/">
                        Home
                    </Link></li>
                    <li><Link to="/history">Video</Link></li>
                </ul>
            </nav>
            {children}
        </div>
    )
}