import './academic.css';
import { GitBranchIcon, GraduationIcon } from '../../elements/icons';

const AcademicInfo = () => {
  return (
    <div className="education-area">
      <section className="academic-section portfolio-experience" aria-labelledby="experience-title">
        <div className="container">
          <div className="academic-wrapper">
            <div className="academic-title reveal">
              <h2 className="left-long-line" id="experience-title">Professional Experience</h2>
              <span className="academic-illustration" aria-hidden="true"><GitBranchIcon /></span>
            </div>
            <ol className="academic-details">
              <li className="reveal single-academic-info">
                  <h3>Incsub / CampusPress</h3>
                  <p className="timeline-role">Site Specialist → Site & Support Specialist</p>
                  <p className="timeline-date">Apr 2024 – Aug 2026</p>
              </li>
              <li className="reveal single-academic-info">
                  <h3>UI Barn — Technical Lead</h3>
                  <p className="timeline-date">Apr 2023 – Apr 2024</p>
              </li>
              <li className="reveal single-academic-info">
                  <h3>Luminous Labs — Software Engineer</h3>
                  <p className="timeline-date">Feb 2021 - Apr 2023</p>
              </li>
              <li className="reveal single-academic-info">
                  <h3>VoidCoders — Software Engineer</h3>
                  <p className="timeline-date">Sep 2018 - Jan 2021</p>
              </li>
              <li className="reveal single-academic-info timeline-early">
                  <h3>Self-taught & Personal Projects</h3>
                  <p className="timeline-date">2011 – 2018</p>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className="academic-section" aria-labelledby="academic-title">
        <div className="container">
          <div className="academic-wrapper">
            <div className="academic-title reveal">
              <h2 className="left-long-line" id="academic-title">My academic background</h2>
              <span className="academic-illustration" aria-hidden="true"><GraduationIcon /></span>
            </div>
            <ol className="academic-details">
              <li className="reveal single-academic-info">
                  <h3>The People's University of Bangladesh (PUB)</h3>
                  <p className="timeline-role">BSc in Computer Science and Engineering (CSE)</p>
              </li>
              <li className="reveal single-academic-info">
                  <h3>Ahsanullah Institute of Technical and Vocational Education and Training (AITVET)</h3>
                  <p className="timeline-role">Diploma Engineering in Computer Technology</p>
              </li>
              <li className="reveal single-academic-info">
                  <h3>Shahid Nagar M,A, Jalil High School</h3>
                  <p className="timeline-role">Secondary School Certificate (SSC)</p>
              </li>
              {/* <li className="single-academic-info">
                  <h3>Chandgaon Government Primary School </h3>
                  <p className="timeline-role">Primary School Certificate (PSC)</p>
              </li> */}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicInfo;
