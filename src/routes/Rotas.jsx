import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';

const Rotas = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('nome');

  useEffect(() => {
    if (isLoggedIn) {
      navigate(`/home/${localStorage.getItem('nome')}`);
    } else {
      navigate('/');
    }
  }, [isLoggedIn, navigate]); 

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to={`/home/${localStorage.getItem('nome')}`} /> : <Login />} />
      <Route path="/home/:nome" element={isLoggedIn ? <App /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default Rotas;
