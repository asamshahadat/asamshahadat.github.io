import './hero.css';   
import heroBgShape from '../../../assets/img/hero-vectors/hero-bg-shape.png'; 
import heroCodeImg from '../../../assets/img/hero-vectors/hero-code.png';
import heroCssImg from '../../../assets/img/hero-vectors/hero-css.png';
import herohtmlImg from '../../../assets/img/hero-vectors/hero-html.png';
import heroJsImg from '../../../assets/img/hero-vectors/hero-js.png';
import herophpImg from '../../../assets/img/hero-vectors/hero-php.png';
import heroStarImg from '../../../assets/img/hero-vectors/hero-star.png';
import heroStarTwoImg from '../../../assets/img/hero-vectors/hero-star-2.png';
import heroVectorImg from '../../../assets/img/hero-vectors/hero-vector-1.png';
import heroVectorTwoImg from '../../../assets/img/hero-vectors/hero-vector-2.png';

const Hero = () => {
  return (
    <div className="hero-area">
      <img src={heroBgShape} className='hero-bg-shape' alt="" />
      <div className="hero-vectors">
        <img src={heroVectorImg} alt="" />
        <img src={herophpImg} alt="" />
        <img src={heroCodeImg} alt="" />
        <img src={herohtmlImg} alt="" />
        <img src={heroJsImg} alt="" />
        <img src={heroCssImg} alt="" />
        <img src={heroStarImg} alt="" />
        <img src={heroStarTwoImg} alt="" />
        <img src={heroVectorTwoImg} alt="" />
      </div>
      <div className="container">
        <div className="hero-text">
          <h4>Hello, I’m -</h4>
          <h2>S M Shahadat Hossain</h2>
          <p>A software engineer who uses his knowledge of programming languages, software development processes, and computer science principles to design, develop, and maintain software systems.</p>
          {/* <a href="#" className="btn-style-a">Portfolio</a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
