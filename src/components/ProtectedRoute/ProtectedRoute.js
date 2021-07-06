import { Route, Redirect } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';

function ProtectedRoute({
  loggedIn,
  isUserChecking,
  userCheckError,
  children,
}) {
  return (
    <>
      {!isUserChecking ? (
        userCheckError ? (
          <ErrorMessage
            classes={'error-message_active error-message_position_center'}
            text={userCheckError}
          />
        ) : (
          <Route>{loggedIn ? children : <Redirect to="/signin" />}</Route>
        )
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default ProtectedRoute;
