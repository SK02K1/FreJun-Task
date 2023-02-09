import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'contexts';

export const withRouteNavigation = (Component) => {
  return (props) => {
    const { isLoggedIn } = useAuth();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    return (
      <>
        {isLoggedIn && <Navigate to={from} replace />}
        <Component {...props} />
      </>
    );
  };
};
