import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import GamePage from './pages/GamePage.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import RulesPage from './pages/RulesPage.jsx';
import ScoresPage from './pages/ScoresPage.jsx';
import SelectionPage from './pages/SelectionPage.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="games" element={<SelectionPage />} />
        <Route path="games/easy" element={<GamePage mode="easy" />} />
        <Route path="games/normal" element={<GamePage mode="normal" />} />
        <Route path="rules" element={<RulesPage />} />
        <Route path="scores" element={<ScoresPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
