import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/adressa_logo.svg";

function Navigation() {
    return (
        <header>
            <Link to="/"><img src={logo} alt="Adresseavisen logo"/></Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/nyheter" className={({ isActive }) => isActive ? "active" : undefined}>
                            Nyheter
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sport" className={({ isActive }) => isActive ? "active" : undefined}>
                            Sport
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/kultur" className={({ isActive }) => isActive ? "active" : undefined}>
                            Kultur
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/midtnorskdebatt" className={({ isActive }) => isActive ? "active" : undefined}>
                            Debatt
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/magasin" className={({ isActive }) => isActive ? "active" : undefined}>
                            Ukeadressa
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
