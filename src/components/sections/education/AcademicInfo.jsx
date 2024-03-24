import './academic.css';   
// import { Link } from 'react-router-dom';
const AcademicInfo = () => {
  return (
    <div className="education-area flex justify-center items-center">
      <div className="container">
        <div className="academic-wrapper flex justify-between gap-10 flex-col md:flex-row p-20">
          <div className="academic-title md:w-1/2 text-center">
            <h2 className="left-long-line">My academic background</h2>
          </div>
          <div className="academic-details md:w-1/2 text-left flex flex-col justify-center">
            <div className="single-academic-info">
                <h3>The People's University of Bangladesh (PUB)</h3>
                <p>BSc in Computer Science and Engineering (CSE)</p>
            </div>
            <div className="single-academic-info">
                <h3>Ahsanullah Institute of Technical and Vocational Education and Training (AITVET)</h3>
                <p>Diploma Engineering in Computer Technology</p>
            </div>
            <div className="single-academic-info">
                <h3>Shahid Nagar M,A, Jalil High School</h3>
                <p>Secondary School Certificate (SSC)</p>
            </div>
            <div className="single-academic-info">
                <h3>Chandgaon Government Primary School </h3>
                <p>Primary School Certificate (PSC)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicInfo;
