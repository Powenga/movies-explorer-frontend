import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { matchPath, Route, Switch, useLocation } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useEffect, useState } from 'react';
import MoviesApi from '../../utils/MoviesApi';
import { movieListAge } from '../../utils/constants';
import { filterMovies } from '../../utils/utils';

function App() {
  const location = useLocation();
  const isHeader = matchPath(location.pathname, {
    path: ['/', '/movies', '/saved-movies', '/profile'],
    exact: true,
  });
  const isFooter = matchPath(location.pathname, {
    path: ['/', '/movies', '/saved-movies'],
    exact: true,
  });
  const isMain = matchPath(location.pathname, { path: '/', exact: true });

  const [keyWord, setKeyWord] = useState('');
  const [movieResultList, setMovieResultList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCardsNotFound, setIsCardsNotFound] = useState(false);
  const [isShortMovie, setIsShortMovie] = useState(false);
  const loggedIn = true;

  function getMovies(keyWord) {
    setIsLoading(true);
    if (!checkMovieList()) {
      MoviesApi.getMovies()
        .then((data) => {
          saveMovies(data);
          const resultMoviesList = filterMovies(keyWord, data, isShortMovie);
          saveLastMovies(resultMoviesList);
          setResultMovies(resultMoviesList);
        })
        .catch()
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      const resultMoviesList = filterMovies(
        keyWord,
        JSON.parse(localStorage.getItem('movieList')),
        isShortMovie
      );
      console.log(resultMoviesList);
      saveLastMovies(resultMoviesList);
      setResultMovies(resultMoviesList);
      setIsLoading(false);
    }
  }

  function setResultMovies(resultMoviesList) {
    setMovieResultList(resultMoviesList);
    resultMoviesList.length
      ? setIsCardsNotFound(false)
      : setIsCardsNotFound(true);
  }

  function saveMovies(movieList) {
    localStorage.setItem('movieList', JSON.stringify(movieList));
    localStorage.setItem('movieUpdateDate', new Date());
  }

  function saveLastMovies(movieList) {
    localStorage.setItem('lastMovieList', JSON.stringify(movieList));
    localStorage.setItem('lastKeyword', JSON.stringify(keyWord));
    localStorage.setItem('isShortMovie', JSON.stringify(isShortMovie));
  }

  function checkMovieList() {
    const savedMovieList = JSON.parse(localStorage.getItem('movieList'));
    return savedMovieList &&
      savedMovieList.length &&
      movieListAge >
        new Date().getTime() -
          new Date(localStorage.getItem('movieUpdateDate')).getTime()
      ? true
      : false;
  }

  function handleShorwMovieChange(value) {
    setIsShortMovie(value);
  }

  useEffect(() => {
    if (
      localStorage.getItem('lastMovieList') &&
      localStorage.getItem('lastKeyword')
    ) {
      setResultMovies(JSON.parse(localStorage.getItem('lastMovieList')));
      setKeyWord(JSON.parse(localStorage.getItem('lastKeyword')));
      setIsShortMovie(JSON.parse(localStorage.getItem('isShortMovie')));
    }
  }, []);

  return (
    <div className="page">
      {isHeader && (
        <Header isMain={isMain}>
          <Navigation loggedIn={loggedIn} classes={'header__nav'} />
          <MobileMenu loggedIn={loggedIn} classes={'header__nav'} />
        </Header>
      )}
      <Switch>
        <Route path="/" exact>
          <Main classes="page__main" />
        </Route>
        <Route path="/movies">
          <Movies
            classes="page__main page__main_type_movies"
            isLoading={isLoading}
            onMovieFind={getMovies}
            keyWord={keyWord}
            onKeyWordChange={setKeyWord}
            movieResultList={movieResultList}
            isCardsNotFound={isCardsNotFound}
            isShortMovie={isShortMovie}
            onShortMovieChange={handleShorwMovieChange}
          />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies classes="page__main page__main_type_saved-movies" />
        </Route>
        <Route path="/profile">
          <Profile classes="page__main" />
        </Route>
        <Route path="/signin">
          <Login classes="page__main" />
        </Route>
        <Route path="/signup">
          <Register classes="page__main" />
        </Route>
        <Route path="*">
          <NotFound classes="page__main not-found" />
        </Route>
      </Switch>
      {isFooter && <Footer />}
    </div>
  );
}

export default App;
