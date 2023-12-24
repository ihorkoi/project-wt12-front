import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/signin',
}) => {
  const isLoggedIn = true; //useSelector(isLoggedIn)

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
