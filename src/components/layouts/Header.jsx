// import logo from '../logo.svg';
import "././css/header.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
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
                        <Link to="about" smooth={true} duration={500} spy={true} className="nav-links" onClick={handleClick} activeClass="active">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="expert" smooth={true} duration={500} spy={true} className="nav-links" onClick={handleClick} activeClass="active">
                            Expertise
                        </Link>
                    </li>
                    <li className="nav-item">
                        <NavLink  to="/" activeclassname="active" className="nav-links" onClick={handleClick} >
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        {/* <NavLink to="/contact" activeclassname="active" className="nav-links" onClick={handleClick} >
                            Contact
                        </NavLink> */}
                        <Link to="footer" smooth={true} duration={500} spy={true} className="nav-links" onClick={handleClick} activeClass="active">
                            Find Me
                        </Link>
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
