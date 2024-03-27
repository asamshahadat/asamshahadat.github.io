
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Portfolio from '../sections/portfolio/Portfolio';
 
const PortfolioPage = () => {
  return (
    <>
      <Header/>
      <div className="portfolio-page-wrapper">
        <Portfolio itemsPerPage={9}/>
      </div>
      <Footer/>
    </>
  );
};

export default PortfolioPage;
