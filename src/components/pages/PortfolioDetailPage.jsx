import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Masonry from 'react-masonry-css';
import portfolioData from '../../data/portfolioData.json';
import portfolioBg from '../../assets/img/shape/expertin-bg.png';

const PortfolioDetailPage = () => {
  const { id } = useParams();
  const [portfolioItem, setPortfolioItem] = useState(null);

  useEffect(() => {
    const item = portfolioData.find(item => item.id === parseInt(id));
    setPortfolioItem(item);
  }, [id]);

  if (!portfolioItem) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="portfolio-area portfolio-details-page">
          <img src={portfolioBg} className='portfolio-bg' alt="" />
          <div className="portfolio-detail">
            {portfolioItem.title && <h2>{portfolioItem.title}</h2>}
            <Masonry
              breakpointCols={{ default: 2, 1100: 2, 700: 1 }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {portfolioItem.images && portfolioItem.images.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image} alt={`${index}`} />
                </div>
              ))}
            </Masonry>
            {portfolioItem.description && <p>{portfolioItem.description}</p>}
            {portfolioItem.link && <Link to={portfolioItem.link}>View Live Site</Link>}
          </div>
      </div>
      <Footer />
    </>
  );
};

export default PortfolioDetailPage;
