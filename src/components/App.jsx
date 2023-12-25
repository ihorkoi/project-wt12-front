import SignInPage from 'pages/SignInPage/SignInPage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Start</div>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage/>} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </div>
  );
};
