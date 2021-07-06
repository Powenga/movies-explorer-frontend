import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ErrorsContext } from '../../contexts/ErrorsContext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';

function ProtectedRoute({ children }) {
  const { loggedIn, isUserChecking } =
    useContext(CurrentUserContext);
  const {userCheckError} = useContext(ErrorsContext);

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
        <div className="preloader-wrapper">
          <Preloader />
        </div>
      )}
    </>
  );
}

export default ProtectedRoute;
