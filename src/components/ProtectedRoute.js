import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function ProtectedRoute({ isDataLoading, children }) {
  const { loggedIn } = useContext(CurrentUserContext);
  return (
    <Route>
      {loggedIn ? children : <Redirect to="/signin" />}
    </Route>
  );
}

export default ProtectedRoute;
