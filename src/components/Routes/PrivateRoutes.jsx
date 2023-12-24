import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/selectors';

export const PrivateRoute = ({
  homePage: HomePage,
  welcomePage: WelcomePage,
}) => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isRestricted = !isLoggedIn && !isRefreshing;

  return isRestricted ? WelcomePage : HomePage;
};
