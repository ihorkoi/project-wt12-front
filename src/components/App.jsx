import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/authOperations';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivateRoute } from './Routes/PrivateRoutes';
import { RestrictedRoute } from './Routes/RestrictedRoutes';
import WelcomePage from 'pages/WelcomePage';
import SignInPage from 'pages/SignInPage/SignInPage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PrivateRoute
                homePage={<div>Homepage</div>}
                welcomePage={<WelcomePage />}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute redirectTo="/" component={<SignUpPage />} />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/" component={<SignInPage />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
