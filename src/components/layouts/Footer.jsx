// import logo from '../logo.svg';
import "./css/footer.css";  
import { Link } from "react-router-dom";
import footerBg from '../../assets/img/shape/footer-bg.png';
import skypeIcon from '../../assets/img/icon/skype.png';
import twitterIcon from '../../assets/img/icon/twitter.png';
import linkedlnIcon from '../../assets/img/icon/linkedln.png';
import githubIcon from '../../assets/img/icon/github.png';
const Footer = () => {
    return (
        <footer className="footer-area" id="footer">
            <img src={footerBg} className="footerbg" alt="" />
            <div className="container">
                <div className="footer-widgets">
                    <h4>Shahadat</h4>
                    <ul className="footer-links">
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/">ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/">Expertise</Link>
                        </li>
                        <li>
                            <Link to="/">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/">Blog</Link>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                    <ul className="footer-social">
                        <li>
                            <Link to="https://github.com/asamshahadat" target="_blank">
                                <img src={githubIcon} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://twitter.com/asamshahadat" target="_blank">
                                <img src={twitterIcon} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.linkedin.com/in/asamshahadat/" target="_blank">
                                <img src={linkedlnIcon} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link to="skype:asamshahadat? chat" target="_blank">
                                <img src={skypeIcon} alt="" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyright">
                    <p>©Shahadat 2023. All rights reserved.</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;
