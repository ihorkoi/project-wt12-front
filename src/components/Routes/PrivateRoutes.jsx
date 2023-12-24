import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ homePage, welcomePage }) => {
  const isRefreshing = false; //useSelector(isRefreshingSelector);
  const isLoggedIn = true; //useSelector(isLoggedIn);
  const isRestricted = !isLoggedIn && !isRefreshing;

  return isRestricted ? welcomePage : homePage;
};
