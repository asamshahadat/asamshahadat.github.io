import './expert.css';   
import expertBg from '../../../assets/img/shape/expertin-bg.png';

const Expert = () => {
  return (
    <div className="expert-in-area" id="expert" >
      <img src={expertBg} className='expert-bg' alt="" />
      <div className="container">
        <div className="expert-title">
            <h2>Expert In</h2>
        </div>
        <div className="expert-contents">
            <div className="single-expert-list">
                <h3>01</h3>
                <h4>Bug Fixing (HTML/CSS/JS/PHP)</h4>
            </div>
            <div className="single-expert-list">
                <h3>02</h3>
                <h4>Front End Development</h4>
            </div>
            <div className="single-expert-list">
                <h3>03</h3>
                <h4>Wordpress Theme Development</h4>
            </div>
            <div className="single-expert-list">
                <h3>04</h3>
                <h4>Wordpress Plugin Development</h4>
            </div>
            <div className="single-expert-list">
                <h3>05</h3>
                <h4>Elementor Widget Development</h4>
            </div>
            <div className="single-expert-list">
                <h3>06</h3>
                <h4>Wordpress Site Specialist</h4>
            </div>
            <div className="single-expert-list">
                <h3>07</h3>
                <h4>Site Template Development</h4>
            </div>
            <div className="single-expert-list">
                <h3>08</h3>
                <h4>Microweber Template Development</h4>
            </div>
            <div className="single-expert-list">
                <h3>09</h3>
                <h4>Laravel Website Development</h4>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
