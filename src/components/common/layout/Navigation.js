import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/adressa_logo.svg";

function Navigation() {
    const [isScrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const handleScroll = () => {
        if(window.scrollY > 5) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    return (
        <header className={`${isScrolled ? "shrink" : undefined}`}>
            <div className="header_top">
                <Link to="/"><img src={logo} alt="Adresseavisen logo"/></Link>
                <button title="Send inn tips til oss">Tips oss</button>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/nyheter" title="Se alle nyheter" className={({ isActive }) => isActive ? "active--news" : undefined}>
                            Nyheter
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sport" title="Se alle sportsnyheter" className={({ isActive }) => isActive ? "active--sport" : undefined}>
                            Sport
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/kultur" title="Se alle kulturnyheter" className={({ isActive }) => isActive ? "active--culture" : undefined}>
                            Kultur
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/midtnorskdebatt" title="Se alle debattinnlegg" className={({ isActive }) => isActive ? "active--debate" : undefined}>
                            Debatt
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/magasin" title="Se ukeadressa" className={({ isActive }) => isActive ? "active--magazine" : undefined}>
                            Ukeadressa
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
