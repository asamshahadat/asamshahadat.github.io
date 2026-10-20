import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import './portfolio-detail.css';
import usePageMeta from '../elements/usePageMeta';
import usePortfolioData from '../elements/usePortfolioData';
import useReveal from '../elements/useReveal';

const PortfolioDetailPage = () => {
  const { id } = useParams();
  const { projects, status, retry } = usePortfolioData();
  const portfolioItem = projects.find(item => item.id === parseInt(id));

  let pageMeta = { title: 'Project not found', path: '/portfolio' };
  if (portfolioItem) {
    pageMeta = { title: portfolioItem.title, description: portfolioItem.description || undefined, path: `/portfolio/${portfolioItem.id}` };
  } else if (status !== 'ready') {
    pageMeta = { title: 'Portfolio', path: `/portfolio/${id}` };
  }
  usePageMeta(pageMeta);
  useReveal();

  return (
    <>
      <Header />
      <main className="portfolio-details-page">
        <div className="container">
          {portfolioItem ? (
            <article className="portfolio-detail">
              <header className="portfolio-detail-header">
                {portfolioItem.project_type && <p className="portfolio-detail-type">{portfolioItem.project_type}</p>}
                {portfolioItem.title && <h1>{portfolioItem.title}</h1>}
              </header>
              {portfolioItem.images && (
                <div className={portfolioItem.images.length === 1 ? "portfolio-gallery portfolio-gallery--single" : "portfolio-gallery"}>
                  {portfolioItem.images.map((image, index) => (
                    <div key={index} className="image-item">
                      <img
                        src={image}
                        alt={`${portfolioItem.title} screenshot ${index + 1}`}
                        loading={index < 2 ? 'eager' : 'lazy'}
                        fetchpriority={index === 0 ? 'high' : 'auto'}
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              )}
              {portfolioItem.description && <p className="portfolio-detail-description">{portfolioItem.description}</p>}
              {portfolioItem.link && (
                <a href={portfolioItem.link} target="_blank" rel="noopener noreferrer" className="btn-style-a btn-accent">
                  View Live Site
                </a>
              )}
            </article>
          ) : status === 'loading' ? (
            <div className="portfolio-detail portfolio-detail-missing" role="status">
              <p>Loading project…</p>
            </div>
          ) : status === 'error' ? (
            <div className="portfolio-detail portfolio-detail-missing" role="alert">
              <h1>Project could not be loaded.</h1>
              <button type="button" className="btn-style-a btn-accent" onClick={retry}>Try again</button>
            </div>
          ) : (
            <div className="portfolio-detail portfolio-detail-missing">
              <h1>Project not found.</h1>
              <Link to="/portfolio" className="btn-style-a btn-accent">Portfolio</Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioDetailPage;
