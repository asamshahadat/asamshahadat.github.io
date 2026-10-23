import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';
import { BracesIcon, CodeLineIcon } from '../../elements/icons';
import usePortfolioData from '../../elements/usePortfolioData';

const ALL = 'All';
const CATEGORY_LABELS = { wordpress: 'WordPress', frontend: 'Frontend' };

// A project can belong to several industries; `industry` alone is the fallback
const getIndustries = item => item.industries || (item.industry ? [item.industry] : []);

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + '...';
  } else {
    return str;
  }
}

// Page numbers with gaps, e.g. 1 … 4 5 6 … 10
function getPageItems(current, total) {
  const pages = new Set([1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter(page => page >= 1 && page <= total).sort((a, b) => a - b);
  return sorted.flatMap((page, index) => (
    index > 0 && page - sorted[index - 1] > 1 ? [`gap-${page}`, page] : [page]
  ));
}

const Portfolio = ({ itemsPerPage = 6 }) => { // Set default value for itemsPerPage
  const { projects, status, retry } = usePortfolioData();
  const [currentPage, setCurrentPage] = useState(1);
  // Only one filter is active at a time: All, a technology, or an industry
  const [activeFilter, setActiveFilter] = useState({ type: ALL, value: ALL });

  const filters = useMemo(() => {
    if (projects.length === 0) {
      return [];
    }
    const categories = [...new Set(projects.map(item => item.category))];
    const industries = [...new Set(projects.flatMap(getIndustries))].sort((a, b) => a.localeCompare(b));
    return [
      { type: ALL, value: ALL, label: ALL, count: projects.length },
      ...categories.map(category => ({
        type: 'category',
        value: category,
        label: CATEGORY_LABELS[category] || category,
        count: projects.filter(item => item.category === category).length,
      })),
      ...industries.map(industry => ({
        type: 'industry',
        value: industry,
        label: industry,
        count: projects.filter(item => getIndustries(item).includes(industry)).length,
      })),
    ];
  }, [projects]);

  const filteredPortfolio = useMemo(
    () => {
      if (activeFilter.type === ALL) {
        return projects;
      }
      if (activeFilter.type === 'industry') {
        return projects.filter(item => getIndustries(item).includes(activeFilter.value));
      }
      return projects.filter(item => item[activeFilter.type] === activeFilter.value);
    },
    [projects, activeFilter]
  );

  const totalPages = Math.ceil(filteredPortfolio.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPortfolio.slice(indexOfFirstItem, indexOfLastItem);

  const isActive = filter => filter.type === activeFilter.type && filter.value === activeFilter.value;

  const selectFilter = filter => {
    setActiveFilter({ type: filter.type, value: filter.value });
    setCurrentPage(1);
  };

  // Changing page keeps the grid in view instead of leaving the reader at the pagination bar
  const goToPage = pageNumber => {
    if (pageNumber < 1 || pageNumber > totalPages || pageNumber === currentPage) {
      return;
    }
    setCurrentPage(pageNumber);
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="portfolio-area" id="portfolio">
      <span className="decor-blob portfolio-blob" aria-hidden="true" />
      <span className="decor-blob portfolio-blob portfolio-blob--warm" aria-hidden="true" />
      <span className="decor-watermark portfolio-watermark portfolio-watermark--braces" aria-hidden="true"><BracesIcon /></span>
      <span className="decor-watermark portfolio-watermark portfolio-watermark--code" aria-hidden="true"><CodeLineIcon /></span>
      <div className="container">
        <div className="portfolio-title">
          <h2>Portfolio</h2>
        </div>

        <div className="portfolio-filters" role="group" aria-label="Filter projects">
          {filters.map(filter => (
            <button
              key={`${filter.type}-${filter.value}`}
              type="button"
              className={isActive(filter) ? 'active' : ''}
              aria-pressed={isActive(filter)}
              onClick={() => selectFilter(filter)}
            >
              {filter.label}
              {filter.type !== ALL && <span className="chip-count">{filter.count}</span>}
            </button>
          ))}
        </div>

        {status === 'loading' && <p className="portfolio-empty" role="status">Loading projects…</p>}

        {status === 'error' && (
          <div className="portfolio-empty" role="alert">
            <p>Projects could not be loaded right now.</p>
            <button type="button" className="btn-style-a btn-accent" onClick={retry}>Try again</button>
          </div>
        )}

        {status === 'ready' && (currentItems.length > 0 ? (
          <div className="portfolio-contents">
            {currentItems.map((item, index) => (
              <article key={item.id} className="single-portfolio-list" style={{ '--i': index }}>
                {item.images && (
                  <div className="portfolio-card-media">
                    <img src={item.images[0]} alt={item.title} width="800" height="500" loading="lazy" decoding="async" />
                    {item.industry && <span className="portfolio-card-badge">{item.industry}</span>}
                  </div>
                )}
                <div className="portfolio-card-body">
                  {item.title && <h3>{item.title}</h3>}
                  {item.description && <p>{truncateString(item.description, 125)}</p>}
                  {item.id && (
                    <Link to={`/portfolio/${item.id}`} className="portfolio-card-link">
                      Details <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="portfolio-empty">No projects found for this filter.</p>
        ))}

        {totalPages > 1 && (
          <nav className="pagination" aria-label="Portfolio pages">
            <button type="button" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
            {getPageItems(currentPage, totalPages).map(page => (
              typeof page === 'string' ? (
                <span key={page} className="pagination-gap" aria-hidden="true">…</span>
              ) : (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={currentPage === page ? 'active' : ''}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </button>
              )
            ))}
            <button type="button" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
          </nav>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
