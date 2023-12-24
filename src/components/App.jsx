import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivateRoute } from './Routes/PrivateRoutes';
import { RestrictedRoute } from './Routes/RestrictedRoutes';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PrivateRoute
                redirectTo="/signin"
                homePage={<div>Home page</div>}
                welcomePage={<div>Welcome page</div>}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<div>Sigup page</div>}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<div>Sigin page</div>}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
