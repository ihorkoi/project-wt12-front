import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';
import { EditWater } from './modals/EditWater';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<EditWater/>} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </div>
  );
};
