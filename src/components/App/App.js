import "./App.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import UserWidget from "../UserWidget/UserWidget";
import { matchPath, Route, Switch, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isMain = matchPath(location.pathname, {path: '/', exact: true});
  return (
    <div className="page">
      <Switch>
        <Route path="/">
          <Header isMain={isMain}>
            <Navigation classes={"header__nav"} />
            <UserWidget loggedIn={true} classes={"header__user"}/>
          </Header>

        </Route>
        <Route path="/movies"></Route>
        <Route path="/saved-movies"></Route>
        <Route path="/profile"></Route>
        <Route path="/signin"></Route>
        <Route path="/signup"></Route>
      </Switch>
    </div>
  );
}

export default App;
