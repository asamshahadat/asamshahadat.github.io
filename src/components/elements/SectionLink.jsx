import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

// Matches --header-height in style.css so smooth-scrolled sections aren't hidden behind the fixed header
const HEADER_OFFSET = -72;

// On the home page scroll smoothly to the section; elsewhere route back to "/#section"
const SectionLink = ({ sectionId, children, onClick, className = "nav-links", spy = false }) => {
    const { pathname } = useLocation();

    if (pathname === "/") {
        return (
            <ScrollLink
                to={sectionId}
                href={`#${sectionId}`}
                smooth={true}
                duration={500}
                offset={HEADER_OFFSET}
                spy={spy}
                className={className}
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
            className={className}
            onClick={onClick}
        >
            {children}
        </RouterLink>
    );
};

export default SectionLink;
