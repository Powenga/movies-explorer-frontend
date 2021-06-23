import SeacrchForm from '../SearchForm/SearchForm';
import './Movies.css';


function Movies({ classes }) {
  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section">
        <SeacrchForm classes="main__section-inner" />
      </section>
    </main>
  );
}

export default Movies;
