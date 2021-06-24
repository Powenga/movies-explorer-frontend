import './Social.css';

function Social({ classes, linkClasses, links }) {
  return (
    <div className={`social ${classes ? classes : ''}`}>
      <ul className="social__list">
        {links.map((link, index) => (
          <li key={index} className="social__item">
            <a
              className={`social__link transition ${linkClasses ? linkClasses : ''}`}
              href={link.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Social;
