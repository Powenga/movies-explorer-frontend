import { Navigate } from 'react-router-dom';
import { FC, PropsWithChildren, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ErrorsContext } from '../../contexts/ErrorsContext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { loggedIn, isUserChecking } = useContext(CurrentUserContext);
  const { userCheckError } = useContext(ErrorsContext);

  if (isUserChecking) {
    return (
      <div className="preloader-wrapper">
        <Preloader />
      </div>
    );
  }

  if (userCheckError) {
    return (
      <ErrorMessage
        classes={'error-message_active error-message_position_center'}
        text={userCheckError}
      />
    );
  }

  if (!loggedIn) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
