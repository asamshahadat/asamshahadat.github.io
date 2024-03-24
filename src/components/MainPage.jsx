import '../App.css';   
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import WhoIam from './sections/about/WhoAmi';
import AcademicInfo from './sections/education/AcademicInfo';
import Expert from './sections/expert/Expert';
import Hero from './sections/hero/Hero';
import Skill from './sections/skills/Skill';
const MainPageContent = () => {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <WhoIam/>
      <AcademicInfo/>
      <Skill/>
      <Expert/>
      <Footer/>
     </div>
  );
};

export default MainPageContent;
