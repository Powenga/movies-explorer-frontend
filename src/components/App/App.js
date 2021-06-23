import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import UserWidget from '../UserWidget/UserWidget';
import Footer from '../Footer/Footer';
import { matchPath, Route, Switch, useLocation } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';

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
  return (
    <div className="page">
      {isHeader && (
        <Header isMain={isMain}>
          <Navigation classes={'header__nav'} />
          <UserWidget loggedIn={true} classes={'header__user'} />
        </Header>
      )}
      <Switch>
        <Route path="/" exact>
          <Main classes="page__main" />
        </Route>
        <Route path="/movies">
          <Movies classes="page__main" />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies classes="page__main" />
        </Route>
        <Route path="/profile">
          <Profile classes="page__main" />
        </Route>
        <Route path="/signin"></Route>
        <Route path="/signup">
          <Register classes="page__main" />
        </Route>
      </Switch>
      {isFooter && <Footer />}
    </div>
  );
}

export default App;
