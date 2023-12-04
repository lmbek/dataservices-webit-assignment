import style from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav>
                <menu className={style.navbar}>
                    <li><Link to="/">Hjem</Link></li>
                    <li><Link to="/about">Om os</Link></li>
                    <li><Link to="/news">Nyheder</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                    <li><Link to="/random-facts">Tilfældige fakta</Link></li>
                    <li><Link to="/photos">Billeder</Link></li>
                    <li><Link to="/todo">At gøre</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                </menu>
            </nav>
        </>
    );
}

export default Navbar;
