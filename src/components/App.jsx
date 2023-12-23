import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Start</div>} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </div>
  );
};
