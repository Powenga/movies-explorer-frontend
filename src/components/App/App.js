import './App.css';
import { useCallback, useEffect, useState } from 'react';
import {
  matchPath,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import MobileMenu from '../MobileMenu/MobileMenu';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import auth from '../../utils/auth';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { errorMessages, movieListAge } from '../../utils/constants';
import { filterMovies } from '../../utils/utils';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ErrorsContext } from '../../contexts/ErrorsContext';

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

  const [savedCards, setSavedCards] = useState([]);

  const [isUserChecking, setIsUserChecking] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    useName: '',
    userEmail: '',
    userId: '',
  });

  const [userCheckError, setUserCheckError] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [logoutError, setlogoutError] = useState(null);
  const [profileError, setProfileError] = useState(null);
  const [movieApiError, setMovieApiError] = useState(null);

  const history = useHistory();

  function setUserData({ name, email, userId }) {
    setCurrentUser({ userName: name, userEmail: email, userId });
  }

  function handleRegister(name, email, pass) {
    auth
      .signUp(name, email, pass)
      .then((res) => {
        if (res) {
          setRegisterError(null);
          setUserData(res);
          setLoggedIn(true);
          history.push('/movies');
        } else {
          throw new Error('Что-то пошло не так...');
        }
      })
      .catch((err) => {
        setRegisterError(err.message);
      });
  }

  function handleLogin(email, pass) {
    auth
      .signIn(email, pass)
      .then((res) => {
        !loggedIn && setLoggedIn(true);
        setUserData(res);
        history.push('/movies');
      })
      .catch((err) => {
        setLoginError(err.message);
      });
  }

  function handleLogout() {
    auth
      .logout()
      .then(() => {
        setLoggedIn(false);
      })
      .catch((err) => {
        setlogoutError(err.message);
      });
  }

  function handleProfileChange(name, email) {
    mainApi
      .editProfile({ name, email })
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        setProfileError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function getMovies(keyWord) {
    setIsLoading(true);
    if (!checkMovieList()) {
      moviesApi
        .getMovies()
        .then((data) => {
          const trandformedMoviesList = transformMovies(data);
          saveAllMovies(data);
          const resultMoviesList = filterMovies(
            keyWord,
            trandformedMoviesList,
            isShortMovie
          );
          setResultMovies(resultMoviesList);
        })
        .catch()
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      const resultMoviesList = transformMovies(
        filterMovies(
          keyWord,
          JSON.parse(localStorage.getItem('movieList')),
          isShortMovie
        )
      );
      setResultMovies(resultMoviesList);
      setIsLoading(false);
    }
  }

  function transformMovies(movieList) {
    return movieList.map((movie) => {
      return {
        ...movie,
        movieId: movie.id,
        image: movie.image.url,
        trailer: movie.trailerLink,
        thumbnail: movie.image.formats.thumbnail.url,
      };
    });
  }

  function handleSaveMovie(status, data) {
    if (status) {
      mainApi.saveCard(data).then((movie) => {
        setMovieResultList((state) =>
          state.map((s) => (s.movieId === movie.movieId ? movie : s))
        );
      });
    } else {
      mainApi.deleteCard(data).then(() => {
        setMovieResultList((state) =>
          state.map((s) =>
            s.movieId === data.movieId ? { ...data, owner: '' } : s
          )
        );
      });
    }
  }

  function setResultMovies(resultMoviesList) {
    setMovieResultList(resultMoviesList);
    resultMoviesList.length
      ? setIsCardsNotFound(false)
      : setIsCardsNotFound(true);
  }

  const saveAllMovies = useCallback((movieList) => {
    localStorage.setItem('movieList', JSON.stringify(movieList));
    localStorage.setItem('movieUpdateDate', new Date());
  }, []);

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
    auth
      .checkAutorization()
      .then((res) => {
        setLoggedIn(true);
        setUserData(res);
      })
      .catch((err) => {
        setLoggedIn(false);
        if (
          err.message !== errorMessages.unauthorized &&
          err.message !== errorMessages.userNotFound
        ) {
          setUserCheckError(errorMessages.serverNotAvalible);
        }
      })
      .finally(() => {
        setIsUserChecking(false);
      });
  }, []);

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

  useEffect(() => {
    function saveLastMovies(movieList) {
      localStorage.setItem('lastMovieList', JSON.stringify(movieList));
      localStorage.setItem('lastKeyword', JSON.stringify(keyWord));
      localStorage.setItem('isShortMovie', JSON.stringify(isShortMovie));
    }
    saveLastMovies(movieResultList);
  }, [movieResultList, isShortMovie, keyWord]);

  return (
    <div className="page">
      <CurrentUserContext.Provider
        value={{
          currentUser: currentUser,
          isUserChecking: isUserChecking,
          loggedIn: loggedIn,
        }}
      >
        {isHeader && (
          <Header isMain={isMain}>
            <Navigation classes={'header__nav'} />
            <MobileMenu loggedIn={loggedIn} classes={'header__nav'} />
          </Header>
        )}
        <ErrorsContext.Provider
          value={{
            userCheckError,
            registerError,
            loginError,
            movieApiError,
            profileError,
          }}
        >
          <Switch>
            <Route path="/" exact>
              <Main classes="page__main" />
            </Route>
            <ProtectedRoute path="/movies">
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
                onCardSave={handleSaveMovie}
              />
            </ProtectedRoute>
            <ProtectedRoute path="/saved-movies">
              <SavedMovies
                classes="page__main page__main_type_saved-movies"
                onCardDelete={handleSaveMovie}
                savedCards={savedCards}
                setSavedCards={setSavedCards}
              />
            </ProtectedRoute>
            <ProtectedRoute path="/profile">
              <Profile
                classes="page__main"
                onLogout={handleLogout}
                onProfileChange={handleProfileChange}
              />
            </ProtectedRoute>
            <Route path="/signin">
              <Login classes="page__main" onLogin={handleLogin} />
            </Route>
            <Route path="/signup">
              <Register classes="page__main" onRegister={handleRegister} />
            </Route>
            <Route path="*">
              <NotFound classes="page__main not-found" />
            </Route>
          </Switch>
        </ErrorsContext.Provider>
        {isFooter && <Footer />}
      </CurrentUserContext.Provider>
    </div>
  );
}
export default App;
