import './skill.css';
import FloatingTile from '../../elements/FloatingTile';
import { BracesIcon, CodeLineIcon, DatabaseIcon, SparkleIcon, TerminalIcon } from '../../elements/icons';

const skills = ['HTML', 'CSS', 'JavaScript', 'php', 'MySQL', 'Wordpress', 'ReactJS', 'Bootstrap', 'Tailwind CSS', 'Mantine'];

const Skill = () => {
  return (
    <section className="skill-area" id="expertise" aria-labelledby="skills-title">
      <div className="container">
        <div className="skills-wrapper reveal">
            <span className="decor-blob skills-blob" aria-hidden="true" />
            <span className="decor-blob skills-blob skills-blob--warm" aria-hidden="true" />
            <FloatingTile icon={CodeLineIcon} className="skills-tile skills-tile--code" />
            <FloatingTile icon={TerminalIcon} className="skills-tile skills-tile--terminal" delay="-2s" />
            <FloatingTile icon={DatabaseIcon} className="skills-tile skills-tile--db" delay="-4s" />
            <FloatingTile icon={BracesIcon} className="skills-tile skills-tile--braces" delay="-6s" />
            <FloatingTile icon={SparkleIcon} variant="sparkle" className="skills-tile skills-tile--spark" delay="-1s" />
            <div className="skills-content">
                <h2 id="skills-title">Programming & Framework</h2>
                <ul className="skills-lists">
                    {skills.map(skill => (
                        <li key={skill}>
                            <div className="single-skill">
                                <p>{skill}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
