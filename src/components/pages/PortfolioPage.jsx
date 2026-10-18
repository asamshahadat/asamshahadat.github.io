
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Portfolio from '../sections/portfolio/Portfolio';
import usePageMeta from '../elements/usePageMeta';
import useReveal from '../elements/useReveal';
 
const PortfolioPage = () => {
  usePageMeta({ title: 'Portfolio', path: '/portfolio' });
  useReveal();

  return (
    <>
      <Header/>
      <main className="portfolio-page-wrapper">
        <Portfolio itemsPerPage={9}/>
      </main>
      <Footer/>
    </>
  );
};

export default PortfolioPage;
