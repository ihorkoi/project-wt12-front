import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
