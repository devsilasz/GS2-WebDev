import { Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';

const Rotas = () => {
  const isLoggedIn = localStorage.getItem('nome');

  return (
    <Routes>
      <Route path="/login" element={isLoggedIn ? <Navigate to={`/home/${localStorage.getItem('nome')}`} /> : <Login />} />
      <Route path="/home/:nome" element={isLoggedIn ? <App /> : <Navigate to="/login" />} />
    </Routes>
  );
};

export default Rotas;
