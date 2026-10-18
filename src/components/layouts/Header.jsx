import "./css/header.css";
import { NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "../elements/icons";
import SectionLink from "../elements/SectionLink";

const MOBILE_QUERY = "(max-width: 960px)";

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    const { pathname } = useLocation();
    const [scrolled, setScrolled] = useState(false);

    // Track scroll so the header can turn from transparent (over the hero) to solid glass
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Only the home page starts with a dark hero behind the header
    const isTransparent = pathname === "/" && !scrolled && !click;

    // While the mobile menu is open: lock page scroll, close on Escape or when resized to desktop
    useEffect(() => {
        if (!click) {
            return;
        }

        const media = window.matchMedia(MOBILE_QUERY);
        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                setClick(false);
            }
        };
        const onMediaChange = (event) => {
            if (!event.matches) {
                setClick(false);
            }
        };

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKeyDown);
        media.addEventListener("change", onMediaChange);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", onKeyDown);
            media.removeEventListener("change", onMediaChange);
        };
    }, [click]);

    return (
        <header className={isTransparent ? "header header--transparent" : "header"}>
            <nav className="navbar" aria-label="Main">
                <div className="nav-container">
                <NavLink to="/" className="nav-logo" onClick={closeMenu}>
                    <span>Shahadat</span>
                    <span className="icon" aria-hidden="true">
                        <CodeIcon />
                    </span>
                </NavLink>
                <ul id="primary-menu" className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <SectionLink sectionId="home" onClick={closeMenu} spy>
                            Home
                        </SectionLink>
                    </li>
                    <li className="nav-item">
                        <SectionLink sectionId="about" onClick={closeMenu} spy>
                            About
                        </SectionLink>
                    </li>
                    <li className="nav-item">
                        <SectionLink sectionId="expert" onClick={closeMenu} spy>
                            Expertise
                        </SectionLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}
                            onClick={closeMenu}
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <SectionLink sectionId="footer" onClick={closeMenu} spy>
                            Find Me
                        </SectionLink>
                    </li>
                </ul>
                <button
                    type="button"
                    className="nav-icon"
                    onClick={handleClick}
                    aria-controls="primary-menu"
                    aria-expanded={click}
                    aria-label={click ? "Close menu" : "Open menu"}
                >
                    <span className="icon" aria-hidden="true">
                        {click ? <HamburgetMenuClose /> : <HamburgetMenuOpen />}
                    </span>
                </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
