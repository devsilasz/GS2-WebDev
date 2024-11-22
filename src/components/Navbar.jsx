import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";


const Navbar = () => {
  const [nome, setNome] = useState('');

  useEffect(() => {
    const nomeArmazenado = localStorage.getItem('nome');
    if (nomeArmazenado) {
      setNome(nomeArmazenado);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#003366" }}>
      <Link className="navbar-brand" to="/">Energia Limpa</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavegacao">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="menuNavegacao">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="#">Início</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Tipos de Energia</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Benefícios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Contato</Link>
          </li>
        </ul>
      </div>
      
      {nome && (
        <div className="navbar-text ms-auto text-light">
          Bem-vindo, {nome}!
        </div>
      )}
    </nav>
  );
};

export default Navbar;
