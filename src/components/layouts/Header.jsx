// import logo from '../logo.svg';
import "././css/header.css";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import React, { useState } from "react";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "../elements/icons";

const SectionLink = ({ sectionId, children, onClick }) => {
    const { pathname } = useLocation();

    if (pathname === "/") {
        return (
            <ScrollLink
                to={sectionId}
                smooth={true}
                duration={500}
                spy={true}
                className="nav-links"
                onClick={onClick}
                activeClass="active"
            >
                {children}
            </ScrollLink>
        );
    }

    return (
        <RouterLink
            to={{ pathname: "/", hash: `#${sectionId}` }}
            className="nav-links"
            onClick={onClick}
        >
            {children}
        </RouterLink>
    );
};

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
                        <SectionLink sectionId="home" onClick={handleClick}>
                            Home
                        </SectionLink>
                    </li>
                    <li className="nav-item">
                        <SectionLink sectionId="about" onClick={handleClick}>
                            About
                        </SectionLink>
                    </li>
                    <li className="nav-item">
                        <SectionLink sectionId="expert" onClick={handleClick}>
                            Expertise
                        </SectionLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}
                            onClick={handleClick}
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <SectionLink sectionId="footer" onClick={handleClick}>
                            Find Me
                        </SectionLink>
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
