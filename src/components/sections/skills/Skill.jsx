import './skill.css';   
import skillBg from '../../../assets/img/shape/skills-bg.png';

const Skill = () => {
  return (
    <div className="skill-area flex justify-center">
      <div className="container">
        <div className="skills-wrapper">
            <img src= {skillBg} className='skill-bg' alt="" />
            <div className="skills-content">
                <h3>Programming & Framework</h3>
                <ul className="skills-lists">
                    <li>
                        <div className="single-skill">
                            <p>HTML</p>
                        </div>
                    </li>
                    <li>
                        <div className="single-skill">
                            <p>CSS</p>
                        </div>
                    </li> 
                    <li>
                        <div className="single-skill">
                            <p>JavaScript</p>
                        </div>
                    </li> 
                    <li>
                        <div className="single-skill">
                            <p>php</p>
                        </div>
                    </li>
                    <li>
                        <div className="single-skill">
                            <p>MySQL</p>
                        </div>
                    </li>
                    <li>
                        <div className="single-skill">
                            <p>Wordpress</p>
                        </div>
                    </li>
                    <li>
                        <div className="single-skill">
                            <p>ReactJS</p>
                        </div>
                    </li>
                    <li>
                        <div className="single-skill">
                            <p>Bootstrap</p>
                        </div>
                    </li>
                    <li>
                        <div className="single-skill">
                            <p>Tailwind CSS</p>
                        </div>
                    </li>
                    <li>
                        <div className="single-skill">
                            <p>Mantine</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
