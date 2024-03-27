import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../../../data/portfolioData.json';
import './portfolio.css';
import portfolioBg from '../../../assets/img/shape/expertin-bg.png';

const Portfolio = ({ itemsPerPage = 6 }) => { // Set default value for itemsPerPage
  const [portfolio, setPortfolio] = useState([]);
  const [filteredPortfolio, setFilteredPortfolio] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('All');

  useEffect(() => {
    setPortfolio(portfolioData);
    const uniqueCategories = [...new Set(portfolioData.map(item => item.category))];
    setCategories(uniqueCategories);
    setFilteredPortfolio(portfolioData);
  }, []);

  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    } else {
      return str;
    }
  }

  const filterPortfolioByCategory = category => {
    setCurrentCategory(category);
    if (category === 'All') {
      setFilteredPortfolio(portfolio);
    } else {
      const filteredItems = portfolio.filter(item => item.category === category);
      setFilteredPortfolio(filteredItems);
    }
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPortfolio.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredPortfolio.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="portfolio-area" id="portfolio">
      <img src={portfolioBg} className='portfolio-bg' alt="" />
      <div className="container">
        <div className="portfolio-title">
          <h2>Portfolio</h2>
        </div>
        <div className="category-buttons">
          <button className={currentCategory === 'All' ? 'active' : ''} onClick={() => filterPortfolioByCategory('All')}>All</button>
          {categories.map((category, index) => (
            <button key={index} className={currentCategory === category ? 'active' : ''} onClick={() => filterPortfolioByCategory(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="portfolio-contents">
          {currentItems.map(item => (
            <div key={item.id} className="single-portfolio-list">
              {item.images && <img src={item.images[0]} alt={item.title} />}
              {item.title && <h4>{item.title}</h4>}
              {item.description && <p>{truncateString(item.description, 125)}</p>}
              {item.id && <Link to={`/portfolio/${item.id}`}>Details</Link>}
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={prevPage}>Prev</button>
          {Array.from({ length: Math.ceil(filteredPortfolio.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={nextPage}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
