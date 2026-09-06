import '../App.css';   
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import WhoIam from './sections/about/WhoAmi';
import AcademicInfo from './sections/education/AcademicInfo';
import Expert from './sections/expert/Expert';
import Hero from './sections/hero/Hero';
import Portfolio from './sections/portfolio/Portfolio';
import Skill from './sections/skills/Skill';
const MainPageContent = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const section = document.getElementById(hash.slice(1));

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return (
    <>
      <Header/>
      <Hero/>
      <WhoIam/>
      <Portfolio/>
      <AcademicInfo/>
      <Skill/>
      <Expert/>
      <Footer/>
    </>
  );
};

export default MainPageContent;
