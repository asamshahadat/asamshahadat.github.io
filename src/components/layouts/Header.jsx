// import logo from '../logo.svg';
import "./header.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "../elements/icons";



const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <header className="header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <nav className="navbar">
                <div className="nav-container">
                <NavLink to="/" className="nav-logo">
                    <span>Shahadat</span>
                    <span className="icon">
                        <CodeIcon />
                    </span>
                </NavLink>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink to="/" activeclassname="active" className="nav-links" onClick={handleClick} >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" activeclassname="active" className="nav-links" onClick={handleClick} >
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink  to="/expertise" activeclassname="active" className="nav-links" onClick={handleClick} >
                            Expertise
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink  to="/portfolio" activeclassname="active" className="nav-links" onClick={handleClick} >
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" activeclassname="active" className="nav-links" onClick={handleClick} >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}
                    {click ? (
                    <span className="icon">
                        <HamburgetMenuClose />
                        
                    </span>
                    ) : (
                    <span className="icon">
                        <HamburgetMenuOpen />{" "}
                    </span>
                    )}
                </div>
                </div>
            </nav>
        </header>
        
    );
};

export default Header;
