import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isRefreshing = false; //useSelector(isRefreshingSelector);
  const isLoggedIn = true; //useSelector(isLoggedIn);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <div>welcome page</div> : Component;
};
