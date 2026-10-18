import './expert.css';
import { BracesIcon, CodeLineIcon, SparkleIcon } from '../../elements/icons';

const services = [
  'Bug Fixing (HTML/CSS/JS/PHP)',
  'Front End Development',
  'Wordpress Theme Development',
  'Wordpress Plugin Development',
  'Gutenberg / FSE Development',
  'Website Migration',
  'Elementor Widget Development',
  'Wordpress Site Specialist',
  'Site Template Development',
  'Technical Troubleshooting',
  'WordPress Technical Support',
  'Microweber Template Development',
  'Laravel Website Development',
  'AI-Assisted Development',
];

const Expert = () => {
  return (
    <section className="expert-in-area" id="expert" aria-labelledby="expert-title">
      <span className="decor-dots expert-dots expert-dots--top" aria-hidden="true" />
      <span className="decor-dots expert-dots expert-dots--bottom" aria-hidden="true" />
      <span className="decor-watermark expert-watermark" aria-hidden="true"><BracesIcon /></span>
      <div className="container">
        <div className="expert-title reveal">
            <h2 id="expert-title">What I Do</h2>
        </div>
        <ol className="expert-contents">
            {services.map((service, index) => (
              <li key={service} className="single-expert-list reveal" style={{ '--reveal-delay': `${(index % 4) * 70}ms` }}>
                  <span className="expert-card-top">
                    <span className="expert-number">{String(index + 1).padStart(2, '0')}</span>
                    {index === 0 && <span className="expert-icon" aria-hidden="true"><CodeLineIcon /></span>}
                    {index === services.length - 1 && <span className="expert-icon" aria-hidden="true"><SparkleIcon /></span>}
                  </span>
                  <h3>{service}</h3>
              </li>
            ))}
        </ol>
      </div>
    </section>
  );
};

export default Expert;
