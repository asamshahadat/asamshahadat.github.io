import { useEffect } from "react";

export const SITE_URL = "https://shahadatdev.com";
export const SITE_NAME = "S M Shahadat Hossain";
export const DEFAULT_TITLE = "S M Shahadat Hossain — WordPress & Front-End Developer";
export const DEFAULT_DESCRIPTION = "WordPress & Front-End Developer with 8+ years of web development experience, specializing in modern WordPress development, Gutenberg/FSE, website migrations, responsive front-end development, and technical troubleshooting.";

const setMeta = (selector, value) => {
    const element = document.head.querySelector(selector);
    if (element) {
        element.setAttribute(selector.startsWith("link") ? "href" : "content", value);
    }
};

// Keeps title, description, canonical and social tags in sync with the current route
const usePageMeta = ({ title, description = DEFAULT_DESCRIPTION, path = "/" }) => {
    useEffect(() => {
        const fullTitle = title ? `${title} — ${SITE_NAME}` : DEFAULT_TITLE;
        const url = `${SITE_URL}${path}`;

        document.title = fullTitle;
        setMeta('meta[name="description"]', description);
        setMeta('link[rel="canonical"]', url);
        setMeta('meta[property="og:title"]', fullTitle);
        setMeta('meta[property="og:description"]', description);
        setMeta('meta[property="og:url"]', url);
        setMeta('meta[name="twitter:title"]', fullTitle);
        setMeta('meta[name="twitter:description"]', description);
    }, [title, description, path]);
};

export default usePageMeta;
