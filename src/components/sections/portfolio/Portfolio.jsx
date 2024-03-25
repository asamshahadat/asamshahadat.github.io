import './portfolio.css';   
import expertBg from '../../../assets/img/shape/expertin-bg.png';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; 
import portfolioData from '../../../data/portfolioData.json'; // Import the JSON file directly

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
      // Set portfolio data from imported JSON file
      setPortfolio(portfolioData);
    }, []);

    return (
        <div className="portfolio-area" >
            <img src={expertBg} className='portfolio-bg' alt="" />
            <div className="container">
                <div className="portfolio-title">
                    <h2>Portfolio</h2>
                </div>
                <div className="portfolio-contents">
                    {portfolio.map(item => (
                        <div key={item.id} className="single-portfolio-list">
                            {item.image && <img src={item.image} alt={item.title} />}
                            {item.title && <h4>{item.title}</h4>}
                            {item.description && <p>{item.description}</p>}
                            {item.link && <Link to={item.link}>Visit</Link>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
