import { useState } from "react";
import { MdMenu } from "react-icons/md";

const Header=()=>{
    const[isMenuOpen ,SetIsMenuOpen]=useState(false);

    const toggleMenu=()=>{
        SetIsMenuOpen(!isMenuOpen);
    }
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="">S.R</a>
            </div>
            <div className={`navbar-links ${isMenuOpen ? 'active': " "}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/service">Service</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-menu-icon"
            onClick={toggleMenu}>
                <MdMenu className="menu" />
            </div>
        </nav>
    )
}
export default Header;









