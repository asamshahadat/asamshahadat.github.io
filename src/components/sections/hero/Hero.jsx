import './hero.css';
import { Link } from 'react-router-dom';
import FloatingTile from '../../elements/FloatingTile';
import SectionLink from '../../elements/SectionLink';
import HeroBackdrop from './HeroBackdrop';
import { ArrowRightIcon, BlocksIcon, CartIcon, ChatIcon, CodeLineIcon, SparkleIcon, WordPressIcon } from '../../elements/icons';

// Decorative editor content, built only from facts already on the page
const codeLines = [
  [['keyword', '<?php']],
  [['comment', '// Writing code since 2011']],
  [['var', '$developer'], ['text', ' = [']],
  [['prop', "  'name'"], ['text', ' => '], ['string', "'S M Shahadat Hossain'"], ['text', ',']],
  [['prop', "  'role'"], ['text', ' => '], ['string', "'WordPress & Front-End Developer'"], ['text', ',']],
  [['prop', "  'experience'"], ['text', ' => '], ['string', "'8+ years'"], ['text', ',']],
  [['prop', "  'stack'"], ['text', ' => ['], ['string', "'WordPress'"], ['text', ', '], ['string', "'Gutenberg'"], ['text', ', '], ['string', "'PHP'"], ['text', ', '], ['string', "'React'"], ['text', '],']],
  [['prop', "  'available'"], ['text', ' => '], ['bool', 'true'], ['text', ',']],
  [['text', '];']],
  [],
  [['fn', 'add_action'], ['text', '( '], ['string', "'after_setup_theme'"], ['text', ', '], ['keyword', 'function'], ['text', ' () {']],
  [['fn', '    add_theme_support'], ['text', '( '], ['string', "'block-templates'"], ['text', ' );']],
  [['text', '} );']],
];

// Professional achievements shown under the hero
const heroStats = [
  { value: '8+', unit: 'Years', label: 'Professional Experience' },
  { value: '500+', unit: 'Websites', label: 'Built & Delivered' },
  { value: '200+', unit: 'Websites', label: 'Successfully Migrated' },
  { value: 'WordPress', label: 'Development Specialist' },
];

const Hero = () => {
  return (
    <section className="hero-area" id="home" aria-labelledby="hero-title">
      <span className="decor-blob hero-blob hero-blob--1" aria-hidden="true" />
      <span className="decor-blob hero-blob hero-blob--2" aria-hidden="true" />
      <HeroBackdrop />
      <div className="container">
        <div className="hero-layout">
          <div className="hero-text">
            <h1 id="hero-title">
              <span className="hero-greeting">
                <span className="hero-greeting-wave" aria-hidden="true" />
                Hi, I’m S M Shahadat Hossain
              </span>
              <span className="hero-headline">
                <span className="hero-highlight">WordPress</span> &amp; <span className="hero-nowrap">Front-End</span> Developer
              </span>
            </h1>
            <p className="hero-since">
              <CodeLineIcon className="hero-since-icon" />
              Writing code since 2011 - professionally since 2018.
            </p>
            <p className="hero-summary">WordPress & Front-End Developer with 8+ years of web development experience, specializing in modern WordPress development, Gutenberg/FSE, website migrations, responsive front-end development, and technical troubleshooting.</p>
            <div className="hero-actions">
              <Link to="/portfolio" className="hero-btn hero-btn--primary">
                Explore My Work
                <ArrowRightIcon className="hero-btn-icon" />
              </Link>
              <SectionLink sectionId="contact" className="hero-btn hero-btn--ghost">
                <ChatIcon className="hero-btn-icon hero-btn-icon--lead" />
                Let’s Talk
              </SectionLink>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <span className="hero-visual-glow" />
            <div className="code-window">
              <div className="code-window-bar">
                <span className="code-dot" />
                <span className="code-dot" />
                <span className="code-dot" />
                <span className="code-window-file">functions.php</span>
                <span className="code-window-lang">PHP</span>
              </div>
              <pre className="code-window-body">
                {codeLines.map((tokens, lineIndex) => (
                  <span className="code-line" key={lineIndex} style={{ '--line': lineIndex }}>
                    <span className="code-line-number">{lineIndex + 1}</span>
                    {tokens.map(([type, value], tokenIndex) => (
                      <span className={`tok-${type}`} key={tokenIndex}>{value}</span>
                    ))}
                    {lineIndex === codeLines.length - 1 && <span className="code-caret" />}
                    {'\n'}
                  </span>
                ))}
              </pre>
            </div>

            <div className="terminal-card">
              <span className="terminal-prompt">$ wp core update</span>
              <span className="terminal-success">✓ Success: WordPress is up to date.</span>
            </div>

            <span className="tech-badge tech-badge--wp">
              <WordPressIcon className="tech-badge-icon" />
              WordPress
            </span>
            <span className="tech-badge tech-badge--gutenberg">
              <BlocksIcon className="tech-badge-icon" />
              Gutenberg
            </span>
            <span className="tech-badge tech-badge--woo">
              <CartIcon className="tech-badge-icon" />
              WooCommerce
            </span>

            <FloatingTile icon={CodeLineIcon} variant="accent" className="hero-tile hero-tile--code" />
            <FloatingTile icon={SparkleIcon} variant="sparkle" className="hero-tile hero-tile--spark-1" delay="-1.5s" />
          </div>
        </div>

        <dl className="hero-stats">
          {heroStats.map((stat, index) => (
            <div className="hero-stat" key={stat.label} style={{ '--stat': index }}>
              <dt className="hero-stat-label">{stat.label}</dt>
              <dd className="hero-stat-value">
                <span className="hero-stat-number">{stat.value}</span>
                {stat.unit && <span className="hero-stat-unit">{stat.unit}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
