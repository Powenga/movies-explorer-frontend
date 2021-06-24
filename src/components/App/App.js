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

  const loggedIn = true;
  const isLoading = true;

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
          <Movies classes="page__main page__main_type_movies" isLoading={isLoading} />
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
