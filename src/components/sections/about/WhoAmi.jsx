import './whoami.css';   
import { Link } from "react-router-dom";
import shahadatImg from '../../../assets/img/shahadat/shahadat.png'; 
import whoImgBgShape from '../../../assets/img/shape/who-am-i.png'; 
const WhoIam = () => {
  return (
    <div className="who-area flex justify-center items-center" id="about">
      <div className="container">
        <div className="who-img-text-wrapper flex justify-center gap-10 flex-col md:flex-row p-20">
          <div className="whoi-img md:w-1/2 text-center">
            <img src={whoImgBgShape} alt="" className="whoimbgshape"/>
            <img src={shahadatImg} alt="" />
          </div>
          <div className="who-text md:w-1/2 text-left flex flex-col justify-center">
            <h2 className="left-long-line">Who am I?</h2>
            <p>I'm a WordPress and Front-End Developer with 8+ years of experience building and maintaining websites. Most recently, I worked remotely with Incsub/CampusPress as a Site Specialist and later as a Site & Support Specialist, working on WordPress development, Gutenberg/FSE, website migrations, troubleshooting, and technical support.</p>
            <p>I enjoy solving complex website problems, building responsive interfaces, and using modern tools—including AI-assisted workflows—to make development faster and more efficient.</p>
            <p>Please feel free to reach out to me if you have any questions or would like to discuss a potential collaboration.</p>
            
            <Link to="https://drive.google.com/file/d/1Yu7iAobu7XVVnGl74XldnJm2HrGT2-wH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-style-a resume-btn">
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIam;
