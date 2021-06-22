import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";
import UserWidget from "../UserWidget/UserWidget";
import Promo from "../Promo/Promo";
import { matchPath, Route, Switch, useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  const isMain = matchPath(location.pathname, { path: "/", exact: true });
  return (
    <div className="page">
      <Switch>
        <Route path="/" exact>
            <Header isMain={isMain}>
              <Navigation classes={"header__nav"} />
              <UserWidget loggedIn={true} classes={"header__user"} />
            </Header>
          <Main/>
        </Route>
        <Route path="/movies">
          <Header isMain={isMain}>
            <Navigation classes={"header__nav"} />
            <UserWidget loggedIn={true} classes={"header__user"} />
          </Header>
        </Route>
        <Route path="/saved-movies"></Route>
        <Route path="/profile"></Route>
        <Route path="/signin"></Route>
        <Route path="/signup"></Route>
      </Switch>
    </div>
  );
}

export default App;
