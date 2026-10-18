import './whoami.css';
import shahadatImg from '../../../assets/img/shahadat/shahadat.png';
import { CodeLineIcon } from '../../elements/icons';

const WhoIam = () => {
  return (
    <section className="who-area" id="about">
      <div className="container">
        <div className="who-img-text-wrapper">
          <div className="whoi-img reveal">
            <span className="whoi-glow" aria-hidden="true" />
            <span className="whoi-frame" aria-hidden="true" />
            <span className="decor-dots whoi-dots" aria-hidden="true" />
            <div className="whoi-photo">
              <img
                src={shahadatImg}
                alt="S M Shahadat Hossain"
                width="500"
                height="500"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Badges repeat facts from the text below, so they are hidden from screen readers */}
            <div className="whoi-badge whoi-badge--years" aria-hidden="true">
              <span className="whoi-badge-number">8+</span>
              <span className="whoi-badge-label">years of experience</span>
            </div>
            <div className="whoi-badge whoi-badge--since" aria-hidden="true">
              <span className="whoi-badge-icon"><CodeLineIcon /></span>
              <span>Writing code since 2011</span>
            </div>
          </div>
          <div className="who-text reveal" style={{ '--reveal-delay': '120ms' }}>
            <h2 className="left-long-line">Who am I?</h2>
            <p>My journey with code started in 2011, when I was in class 9 - tinkering with small personal projects out of pure curiosity. In 2018, that curiosity became my profession.</p>
            <p>I'm a WordPress and Front-End Developer with 8+ years of experience building and maintaining websites. Most recently, I worked remotely with Incsub/CampusPress as a Site Specialist and later as a Site & Support Specialist, working on WordPress development, Gutenberg/FSE, website migrations, troubleshooting, and technical support.</p>
            <p>I enjoy solving complex website problems, building responsive interfaces, and using modern tools-including AI-assisted workflows-to make development faster and more efficient.</p>
            <p>Please feel free to reach out to me if you have any questions or would like to discuss a potential collaboration.</p>

            <a href="https://drive.google.com/file/d/1Yu7iAobu7XVVnGl74XldnJm2HrGT2-wH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-style-a btn-accent resume-btn">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIam;
