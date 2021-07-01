import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound({ classes }) {
  return (
    <main className={`main ${classes ? classes : ''}`}>
      <div className="nof-found__code-box">
        <p className="not-found__code">404</p>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <div className="nof-found__link-box">
        <Link to="/" className="not-found__link">
          Назад
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
