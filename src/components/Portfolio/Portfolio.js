import './Portfolio.css';
import { portfolio } from '../../utils/constants.js';

function Portfolio() {
  return (
    <div className="porfolio">
      <h4 className="portfolio-title">Портфолио</h4>
      <ul className="portfolio-list">
        {portfolio.map((elem, index) => (
          <li key={index} className="porfolio-item">
            <a
              className="portfolio-link"
              href={elem.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {elem.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
