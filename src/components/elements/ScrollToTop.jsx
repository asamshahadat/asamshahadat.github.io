import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Start each new page at the top; hash links are handled by the page itself
const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
