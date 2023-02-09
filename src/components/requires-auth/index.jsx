import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from 'contexts';

export const RequiresAuth = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};
