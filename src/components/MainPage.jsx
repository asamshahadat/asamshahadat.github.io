import '../App.css';   
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import WhoIam from './sections/about/WhoAmi';
import AcademicInfo from './sections/education/AcademicInfo';
import Expert from './sections/expert/Expert';
import Hero from './sections/hero/Hero';
import Portfolio from './sections/portfolio/Portfolio';
import Skill from './sections/skills/Skill';
const MainPageContent = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <WhoIam/>
      <AcademicInfo/>
      <Portfolio/>
      <Skill/>
      <Expert/>
      <Footer/>
    </>
  );
};

export default MainPageContent;
