// src/components/sections/portfolio/Portfolio.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../../../data/portfolioData.json';
import './portfolio.css';
import portfolioBg from '../../../assets/img/shape/expertin-bg.png';
const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    setPortfolio(portfolioData);
  }, []);


  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...'; // Truncate the string and add ellipsis
    } else {
      return str; // Return the original string if it's within the limit
    }
  }

  return (
    <div className="portfolio-area">
      <img src={portfolioBg} className='portfolio-bg' alt="" />
      <div className="container">
        <div className="portfolio-title">
          <h2>Portfolio</h2>
        </div>
        <div className="portfolio-contents">
          {portfolio.map(item => (
            <div key={item.id} className="single-portfolio-list">
              {item.images && <img src={item.images[0]} alt={item.title} />}
              {item.title && <h4>{item.title}</h4>}
              {/* {item.description && <p>{item.description}</p>} */}
              {item.description && <p>{truncateString(item.description, 125)}</p>}
              {item.id && <Link to={`/portfolio/${item.id}`}>Details</Link>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
