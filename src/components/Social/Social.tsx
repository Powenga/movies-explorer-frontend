import './Social.css';

function Social({ classes, linkClasses, itemClasses, links }) {
  return (
    <div className={`social ${classes ? classes : ''}`}>
      <ul className={`social__list ${classes ? classes : ''}`}>
        {links.map((link, index) => (
          <li
            key={index}
            className={`social__item ${itemClasses ? itemClasses : ''}`}
          >
            <a
              className={`social__link transition ${
                linkClasses ? linkClasses : ''
              }`}
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
