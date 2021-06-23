import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import UserWidget from '../UserWidget/UserWidget';
import Footer from '../Footer/Footer';
import { matchPath, Route, Switch, useLocation } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  const location = useLocation();
  const isMainRoutes = matchPath(location.pathname, {
    path: ['/', '/movies', '/saved-movies'],
    exact: true,
  });
  const isMain = matchPath(location.pathname, { path: '/', exact: true });
  return (
    <div className="page">
      {isMainRoutes && (
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
        <Route path="/profile"></Route>
        <Route path="/signin"></Route>
        <Route path="/signup"></Route>
      </Switch>
      {isMainRoutes && <Footer />}
    </div>
  );
}

export default App;
