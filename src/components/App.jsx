import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivateRoute } from './Routes/PrivateRoutes';
import { RestrictedRoute } from './Routes/RestrictedRoutes';
import WelcomePage from 'pages/WelcomePage';
import { AddWater } from './AddWater/AddWater';

export const App = () => {
  return (
    <div>
      <AddWater />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PrivateRoute
                homePage={<div>Home page</div>}
                welcomePage={<WelcomePage />}
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
