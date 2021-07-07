import './App.css';
import { useCallback, useEffect, useReducer, useState } from 'react';
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
import {
  errorMessages,
  localStorageObj,
  movieListAge,
  cardNumber,
} from '../../utils/constants';
import { findMovies, filterMovies } from '../../utils/utils';
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
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [movieResultList, setMovieResultList] = useState([]);
  const [movieRenderedList, setMovieRenderedList] = useState([]);
  const [movieShownList, setMovieShownList] = useState([]);
  const [movieHiddenList, setMovieHiddenList] = useState([]);
  const [movieShownNumber, setMovieShownNumber] = useState(0);
  const [movieAddedNumber, setMovieAddedNumber] = useState(0);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const [movieIsLoading, setMovieIsLoading] = useState(false);
  const [moviesNotFound, setMoviesNotFound] = useState(false);

  const [userMoviesKeyword, setUserMoviesKeyword] = useState('');
  const [userMovieIsShort, setUserMovieIsShort] = useState(false);
  const [userMovies, userMovieDispatch] = useReducer(setUserMovies, {
    userMovieList: [],
    userMovieRenderedList: [],
  });
  const [userMovieIsLoading, setUserMovieIsLoading] = useState(true);
  const [userMoviesNotFound, setUserMoviesNotFound] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [isUserChecking, setIsUserChecking] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    useName: '',
    userEmail: '',
    userId: '',
  });

  const [keyWordError, setkeyWordError] = useState(null);
  const [userCheckError, setUserCheckError] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [logoutError, setlogoutError] = useState(null);
  const [profileError, setProfileError] = useState(null);
  const [movieApiError, setMovieApiError] = useState(null);
  const [saveMovieError, setSaveMovieError] = useState(null);
  const [deleteMovieError, setDeleteMovieError] = useState(null);
  const [getUserMovieError, setGetUserMovieError] = useState(null);

  const history = useHistory();

  function setUserMovies(userMovies, action) {
    switch (action.type) {
      case 'setUserMovies':
        return {
          userMovieList: action.userMovieList,
          userMovieRenderedList: filterMovies(
            userMovieIsShort,
            findMovies(userMoviesKeyword, action.userMovieList)
          ),
        };
      case 'findUserMovies':
        return {
          userMovieList: action.userMovieList,
          userMovieRenderedList: filterMovies(
            userMovieIsShort,
            findMovies(action.keyWord, action.userMovieList)
          ),
        };
      case 'filterUserMovies':
        return {
          userMovieList: userMovies.userMovieList,
          userMovieRenderedList: filterMovies(
            action.isShort,
            findMovies(userMoviesKeyword, userMovies.userMovieList)
          ),
        };
      case 'addUserMovie':
        const newMovieList = [...userMovies.userMovieList, action.movie];
        return {
          userMovieList: newMovieList,
          userMovieRenderedList: filterMovies(
            userMovieIsShort,
            findMovies(userMoviesKeyword, newMovieList)
          ),
        };

      case 'removeUserMovie':
        const filterdMovieList = userMovies.userMovieList.filter((s) =>
          s.movieId === action.movie.movieId ? false : true
        );
        return {
          userMovieList: filterdMovieList,
          userMovieRenderedList: filterMovies(
            userMovieIsShort,
            findMovies(userMoviesKeyword, filterdMovieList)
          ),
        };
      default:
        return userMovies;
    }
  }

  function setUserData({ name, email, userId }) {
    setCurrentUser({ userName: name, userEmail: email, userId });
  }

  function handleRegister(name, email, pass) {
    setIsLoading(true);
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogin(email, pass) {
    setIsLoading(true);
    auth
      .signIn(email, pass)
      .then((res) => {
        setLoginError(null);
        !loggedIn && setLoggedIn(true);
        setUserData(res);
        history.push('/movies');
      })
      .catch((err) => {
        setLoginError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogout() {
    auth
      .logout()
      .then(() => {
        setlogoutError(null);
        setLoggedIn(false);
      })
      .catch((err) => {
        setlogoutError(err.message);
      });
  }

  function handleProfileChange(name, email) {
    setIsLoading(true);
    mainApi
      .editProfile({ name, email })
      .then((res) => {
        setProfileError(null);
        setUserData(res);
      })
      .catch((err) => {
        setProfileError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function getMovies(keyWord) {
    if (!keyWord) {
      setkeyWordError(errorMessages.keyWordRequired);
    } else {
      setkeyWordError(null);
      setMovieIsLoading(true);
      if (!checkSavedMovieList()) {
        moviesApi
          .getMovies()
          .then((data) => {
            setMovieApiError(null);
            const trandformedMoviesList = transformMovies(data);
            saveAllMovies(trandformedMoviesList);
            const findedMovieList = findMovies(keyWord, trandformedMoviesList);
            showMovies(findedMovieList);
          })
          .catch(() => {
            setMovieApiError(errorMessages.serverNotAvalible);
          })
          .finally(() => {
            setMovieIsLoading(false);
          });
      } else {
        const findedMovieList = findMovies(
          keyWord,
          JSON.parse(localStorage.getItem(localStorageObj.movieList))
        );
        showMovies(findedMovieList);
        setMovieIsLoading(false);
      }
    }
  }

  function checkSavedMovieList() {
    const savedMovieList = JSON.parse(
      localStorage.getItem(localStorageObj.movieList)
    );
    return savedMovieList &&
      savedMovieList.length &&
      movieListAge >
        new Date().getTime() -
          new Date(
            localStorage.getItem(localStorageObj.movieListUpdateDate)
          ).getTime()
      ? true
      : false;
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

  const saveAllMovies = useCallback((movieList) => {
    localStorage.setItem(localStorageObj.movieList, JSON.stringify(movieList));
    localStorage.setItem(localStorageObj.movieListUpdateDate, new Date());
  }, []);

  function handleMoreClick() {
    setMovieShownNumber(movieShownNumber + movieAddedNumber);
    setMovieShownList([
      ...movieShownList,
      ...movieHiddenList.slice(0, movieAddedNumber),
    ]);
    setMovieHiddenList(movieHiddenList.slice(movieAddedNumber, -1));
  }

  function handleSaveMovie(status, data) {
    if (status) {
      mainApi
        .saveCard(data)
        .then((movie) => {
          setSaveMovieError(null);
          setMovieResultList((state) =>
            state.map((s) => (s.movieId === movie.movieId ? movie : s))
          );
          userMovieDispatch({
            type: 'addUserMovie',
            movie,
          });
        })
        .catch((err) => {
          setSaveMovieError(err.message);
        });
    } else {
      mainApi
        .deleteCard(data)
        .then(() => {
          setDeleteMovieError(null);
          setMovieResultList((state) =>
            state.map((s) =>
              s.movieId === data.movieId ? { ...data, owner: '' } : s
            )
          );
          userMovieDispatch({
            type: 'removeUserMovie',
            movie: data,
          });
        })
        .catch((err) => {
          setDeleteMovieError(err.message);
        });
    }
  }

  function showMovies(findedMovieList) {
    const movieResultWithMark = setUserMark(userMovies.userMovieList, findedMovieList);
    setMovieResultList(movieResultWithMark);
    const filteredMovieList = filterMovies(isShortMovie, movieResultWithMark);
    setMovieRenderedList(filteredMovieList);
    filteredMovieList.length
      ? setMoviesNotFound(false)
      : setMoviesNotFound(true);
  }

  function handleShortMovieChange(value) {
    setIsShortMovie(value);
  }

  function handleUserMovieIsShortChange(value) {
    setUserMovieIsShort(value);
  }

  useEffect(() => {
    userMovieDispatch({
      type: 'filterUserMovies',
      isShort: userMovieIsShort,
    });
  }, [userMovieIsShort])

  function setUserMark(userMovieList, movieList) {
    return movieList.map((s) => {
      const isMovie = userMovieList.find(
        (userMovie) => userMovie.movieId === s.movieId
      );
      if (isMovie) {
        return isMovie;
      } else {
        return s;
      }
    });
  }

  function getUserMovie(userMoviesKeyword) {
    userMovieDispatch({
      type: 'findUserMovies',
      userMovieList: userMovies.userMovieList,
      keyWord: userMoviesKeyword,
    });
  }

  useEffect(() => {
    !userMovies.userMovieRenderedList.length
      ? setUserMoviesNotFound(true)
      : setUserMoviesNotFound(false);
  }, [userMovies]);

  useEffect(() => {
    auth
      .checkAutorization()
      .then((res) => {
        setUserCheckError(null);
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
    setMovieRenderedList(filterMovies(isShortMovie, movieResultList));
  }, [isShortMovie, movieResultList]);

  useEffect(() => {
    if (
      localStorage.getItem(localStorageObj.lastMovieList) &&
      localStorage.getItem(localStorageObj.lastKeyword)
    ) {
      setMovieResultList(
        JSON.parse(localStorage.getItem(localStorageObj.lastMovieList))
      );
      setKeyWord(JSON.parse(localStorage.getItem(localStorageObj.lastKeyword)));
      setIsShortMovie(
        JSON.parse(localStorage.getItem(localStorageObj.isShortMovie))
      );
    }
  }, []);

  useEffect(() => {
    function saveLastMovies(movieList) {
      localStorage.setItem(
        localStorageObj.lastMovieList,
        JSON.stringify(movieList)
      );
      localStorage.setItem(
        localStorageObj.lastKeyword,
        JSON.stringify(keyWord)
      );
      localStorage.setItem(
        localStorageObj.isShortMovie,
        JSON.stringify(isShortMovie)
      );
    }
    saveLastMovies(movieResultList);
  }, [movieResultList, keyWord, isShortMovie]);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getSavedCards()
        .then((userMovieList) => {
          setGetUserMovieError(null);
          userMovieDispatch({ type: 'setUserMovies', userMovieList });
        })
        .catch((err) => {
          if (err.message !== errorMessages.userMoviesNotFound) {
            setGetUserMovieError(err.message);
          }
        })
        .finally(() => {
          setUserMovieIsLoading(false);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (
      viewportWidth <= cardNumber.mobile.resolution &&
      movieAddedNumber >
        cardNumber.mobile.renderCardRows * cardNumber.mobile.rowCardNumber
    ) {
      setMovieShownNumber(
        cardNumber.mobile.renderCardRows * cardNumber.mobile.rowCardNumber
      );
      setMovieAddedNumber(cardNumber.mobile.addCardNumber);
    } else if (viewportWidth <= cardNumber.tabletPortrait.resolution) {
      setMovieShownNumber(
        cardNumber.tabletPortrait.renderCardRows *
          cardNumber.tabletPortrait.rowCardNumber
      );
      setMovieAddedNumber(cardNumber.tabletPortrait.addCardNumber);
    } else if (viewportWidth <= cardNumber.tabletLandscape.resolution) {
      setMovieShownNumber(
        cardNumber.tabletLandscape.renderCardRows *
          cardNumber.tabletLandscape.rowCardNumber
      );
      setMovieAddedNumber(cardNumber.tabletLandscape.addCardNumber);
    } else {
      setMovieShownNumber(
        cardNumber.desktop.renderCardRows * cardNumber.desktop.rowCardNumber
      );
      setMovieAddedNumber(cardNumber.desktop.addCardNumber);
    }
  }, [viewportWidth, movieAddedNumber]);

  useEffect(() => {
    setMovieShownList(movieRenderedList.slice(0, movieShownNumber));
    setMovieHiddenList(movieRenderedList.slice(movieShownNumber, -1));
  }, [movieRenderedList, movieShownNumber]);

  window.addEventListener('resize', () => {
    setTimeout(() => {
      setViewportWidth(window.innerWidth);
    }, 1000);
  });

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
            logoutError,
            movieApiError,
            profileError,
            saveMovieError,
            deleteMovieError,
            getUserMovieError,
          }}
        >
          <Switch>
            <Route path="/" exact>
              <Main classes="page__main" />
            </Route>
            <ProtectedRoute path="/movies">
              <Movies
                classes="page__main page__main_type_movies"
                movieIsLoading={movieIsLoading}
                onMovieFind={getMovies}
                keyWord={keyWord}
                onKeyWordChange={setKeyWord}
                movieList={movieShownList}
                hiddenMovieListLength={movieHiddenList.length}
                isCardsNotFound={moviesNotFound}
                isShortMovie={isShortMovie}
                onShortMovieChange={handleShortMovieChange}
                onCardSave={handleSaveMovie}
                onMoreClick={handleMoreClick}
                keyWordError={keyWordError}
              />
            </ProtectedRoute>
            <ProtectedRoute path="/saved-movies">
              <SavedMovies
                classes="page__main page__main_type_saved-movies"
                userMoviesList={userMovies.userMovieRenderedList}
                userMovieIsLoading={userMovieIsLoading}
                onCardDelete={handleSaveMovie}
                keyWord={userMoviesKeyword}
                onKeyWordChange={setUserMoviesKeyword}
                isCardsNotFound={userMoviesNotFound}
                isShortMovie={userMovieIsShort}
                onShortMovieChange={handleUserMovieIsShortChange}
                onMovieFind={getUserMovie}
              />
            </ProtectedRoute>
            <ProtectedRoute path="/profile">
              <Profile
                classes="page__main"
                onLogout={handleLogout}
                onProfileChange={handleProfileChange}
                isLoading={isLoading}
              />
            </ProtectedRoute>
            <Route path="/signin">
              <Login
                classes="page__main"
                onLogin={handleLogin}
                isLoading={isLoading}
              />
            </Route>
            <Route path="/signup">
              <Register
                classes="page__main"
                onRegister={handleRegister}
                isLoading={isLoading}
              />
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
