import './whoami.css';   
// import { Link } from 'react-router-dom';
import shahadatImg from '../../../assets/img/shahadat/shahadat.png'; 
import whoImgBgShape from '../../../assets/img/shape/who-am-i.png'; 
const WhoIam = () => {
  return (
    <div className="who-area flex justify-center items-center">
      <div className="container">
        <div className="who-img-text-wrapper flex justify-center gap-10 flex-col md:flex-row p-20">
          <div className="whoi-img md:w-1/2 text-center">
            <img src={whoImgBgShape} alt="" className="whoimbgshape"/>
            <img src={shahadatImg} alt="" />
          </div>
          <div className="who-text md:w-1/2 text-left flex flex-col justify-center">
            <h2 className="left-long-line">Who am I?</h2>
            <p>Hello, I'm S M Shahadat Hossain, a passionate software engineer with a love for exploring new technologies. I have gained extensive experience in software engineering through my work in multiple companies, where I have honed my skills in different Programming language and Multiple technology stack.</p>
            <p>As a self-starter, I'm always seeking new opportunities to learn and improve my skills. I'm a strong communicator who can work effectively both independently and as part of a team. I'm excited about the prospect of joining companies that are at the forefront of the technology industry and committed to innovation and excellence. </p>
            <p>Please feel free to reach out to me if you have any questions or would like to discuss a potential collaboration.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIam;
