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
import { useState } from 'react';
import MoviesApi from '../../utils/MoviesApi';
import { movieListAge } from '../../utils/constants';

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
  const loggedIn = true;

  function getMovies(keyWord) {
    setIsLoading(true);
    if (!checkMovieList()) {
      console.log('api fetch');
      MoviesApi.getMovies()
        .then((data) => {
          saveMovies(data);
          setMovieResultList(filterMovies(keyWord, data));
        })
        .catch()
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setMovieResultList(
        filterMovies(keyWord, JSON.parse(localStorage.getItem('movieList')))
      );
      setIsLoading(false);
    }
  }

  function saveMovies(movieList) {
    localStorage.setItem('movieList', JSON.stringify(movieList));
    localStorage.setItem('movieUpdateDate', new Date());
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

  function filterMovies(keyWord, movieList) {
    const lowerKeyWord = keyWord.toLowerCase();
    const resultCardList =   movieList.filter((movie) => {
      return (movie.nameRU &&
        movie.nameRU.toLowerCase().includes(lowerKeyWord)) ||
        (movie.nameEN && movie.nameEN.toLowerCase().includes(lowerKeyWord))
        ? true
        : false;

    });
    if(resultCardList.length) {
      setIsCardsNotFound(false);
      return resultCardList;
    } else {
      setIsCardsNotFound(true);
      return [];
    }
  }

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
            isCardsNotFound = {isCardsNotFound}
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
