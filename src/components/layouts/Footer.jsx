import "./css/footer.css";
import { Link, useLocation } from "react-router-dom";
import SectionLink from "../elements/SectionLink";
import { isPortfolioRoute } from "../elements/routes";
import { ChatIcon, FacebookIcon, FiverrIcon, GithubIcon, LinkedinIcon, MailIcon, UpworkIcon, XIcon } from "../elements/icons";

const contactLinks = [
    { label: "Email", value: "asamshahadat@gmail.com", href: "mailto:asamshahadat@gmail.com", Icon: MailIcon },
    { label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/8801812885833", Icon: ChatIcon, external: true },
    { label: "Upwork", value: "/freelancers/shahadatdev", href: "https://www.upwork.com/freelancers/shahadatdev", Icon: UpworkIcon, external: true, tone: "upwork" },
    { label: "Fiverr", value: "/crazecoder", href: "https://www.fiverr.com/crazecoder", Icon: FiverrIcon, external: true, tone: "fiverr" },
    { label: "LinkedIn", value: "/in/asamshahadat", href: "https://www.linkedin.com/in/asamshahadat/", Icon: LinkedinIcon, external: true },
    { label: "Facebook", value: "/shahadat47", href: "https://www.facebook.com/shahadat47/", Icon: FacebookIcon, external: true },
];

const socialLinks = [
    { label: "GitHub", href: "https://github.com/asamshahadat", Icon: GithubIcon },
    { label: "Twitter", href: "https://twitter.com/asamshahadat", Icon: XIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/asamshahadat/", Icon: LinkedinIcon },
    { label: "Facebook", href: "https://www.facebook.com/shahadat47/", Icon: FacebookIcon },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/shahadatdev", Icon: UpworkIcon },
    { label: "Fiverr", href: "https://www.fiverr.com/crazecoder", Icon: FiverrIcon, wide: true },
];

const externalProps = { target: "_blank", rel: "noopener noreferrer" };

const Footer = () => {
    const { pathname } = useLocation();
    // Portfolio pages get no contact block, social icons or Contact link (see routes.js)
    const showContact = !isPortfolioRoute(pathname);

    return (
        <footer className={showContact ? "footer-area" : "footer-area footer-area--no-contact"} id="footer">
            <span className="decor-blob footer-blob" aria-hidden="true" />
            <div className="container">
                {showContact && (
                    <div className="footer-contact reveal" id="contact">
                        <div className="footer-contact-intro">
                            <h2>Let's work together</h2>
                            <p>Have a project in mind or need help with a WordPress site? Feel free to reach out through any of the channels below.</p>
                        </div>
                        <ul className="footer-contact-list">
                            {contactLinks.map(({ label, value, href, Icon, external, tone }) => (
                                <li key={label}>
                                    <a href={href} className="contact-card" {...(external ? externalProps : {})}>
                                        <span className={tone ? `contact-card-icon contact-card-icon--${tone}` : "contact-card-icon"}><Icon /></span>
                                        <span className="contact-card-text">
                                            <span className="contact-card-label">{label}</span>
                                            <span className="contact-card-value">{value}</span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="footer-widgets">
                    <p className="footer-brand">Shahadat</p>
                    <nav aria-label="Footer">
                        <ul className="footer-links">
                            <li>
                                <SectionLink sectionId="home" className="footer-link">HOME</SectionLink>
                            </li>
                            <li>
                                <SectionLink sectionId="about" className="footer-link">ABOUT</SectionLink>
                            </li>
                            <li>
                                <SectionLink sectionId="expert" className="footer-link">Expertise</SectionLink>
                            </li>
                            <li>
                                <Link to="/portfolio" className="footer-link">Portfolio</Link>
                            </li>
                            {/* Hidden until the blog exists
                            <li>
                                <Link to="/" className="footer-link">Blog</Link>
                            </li> */}
                            {showContact && (
                                <li>
                                    <SectionLink sectionId="contact" className="footer-link">Contact</SectionLink>
                                </li>
                            )}
                        </ul>
                    </nav>
                    {showContact && (
                        <ul className="footer-social">
                            {socialLinks.map(({ label, href, Icon, wide }) => (
                                <li key={label}>
                                    <a href={href} aria-label={label} title={label} className={wide ? "social-wide" : undefined} {...externalProps}>
                                        <Icon />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="footer-copyright">
                    <p>©Shahadat 2026. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
