import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [nome, setNome] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim()) {
      localStorage.setItem('nome', nome);
      setMessage('Login bem-sucedido');
      navigate(`/home/${nome}`); // Navega diretamente para /home/{nome}
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-dark vh-100 text-light">
      <div className="card p-4" style={{ maxWidth: '400px', borderRadius: '10px' }}>
        <h2 className="mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control bg-dark text-light"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>
        {message && (
          <div className="mt-3 text-center text-warning">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
