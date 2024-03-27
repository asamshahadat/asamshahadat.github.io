import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../../../data/portfolioData.json';
import './portfolio.css';
import portfolioBg from '../../../assets/img/shape/expertin-bg.png';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [filteredPortfolio, setFilteredPortfolio] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  //   const [itemsPerPage, setItemsPerPage] = useState(9);
  const itemsPerPage = 6;
  const [currentCategory, setCurrentCategory] = useState('All'); // New state for current category
//   const portfolioCount = portfolioData.length;
  useEffect(() => {
    setPortfolio(portfolioData);
    // Extract unique categories
    const uniqueCategories = [...new Set(portfolioData.map(item => item.category))];
    setCategories(uniqueCategories);
    // Initially, show all portfolio items
    setFilteredPortfolio(portfolioData);
  }, []);

  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...'; // Truncate the string and add ellipsis
    } else {
      return str; // Return the original string if it's within the limit
    }
  }

  // Filter portfolio items by category
  const filterPortfolioByCategory = category => {
    setCurrentCategory(category); // Update current category
    if (category === 'All') {
      setFilteredPortfolio(portfolio);
    } else {
      const filteredItems = portfolio.filter(item => item.category === category);
      setFilteredPortfolio(filteredItems);
    }
    setCurrentPage(1);
  };

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPortfolio.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Next page
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
          {/* Button for showing all items */}
          <button className={currentCategory === 'All' ? 'active' : ''} onClick={() => filterPortfolioByCategory('All')}>All</button>
          {/* Buttons for each category */}
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
              {/* {item.category && <h4>{item.category}</h4>} */}
              {/* {item.description && <p>{item.description}</p>} */}
              {item.description && <p>{truncateString(item.description, 125)}</p>}
              {item.id && <Link to={`/portfolio/${item.id}`}>Details</Link>}
            </div>
          ))}
        </div>
        {/* Pagination */}
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
