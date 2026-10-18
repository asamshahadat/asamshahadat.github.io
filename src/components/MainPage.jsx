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
import usePageMeta from './elements/usePageMeta';
import useReveal from './elements/useReveal';

const MainPageContent = () => {
  const { hash } = useLocation();
  usePageMeta({});
  useReveal();

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
      <main>
        <Hero/>
        <WhoIam/>
        <Portfolio/>
        <AcademicInfo/>
        <Skill/>
        <Expert/>
      </main>
      <Footer/>
    </>
  );
};

export default MainPageContent;
