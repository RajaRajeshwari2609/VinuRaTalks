import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/Landing/LandingPage';
import { DashboardPage } from './pages/Dashboard/DashboardPage';
import { ChallengeDayPage } from './pages/ChallengeDay/ChallengeDayPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/day/:day" element={<ChallengeDayPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
