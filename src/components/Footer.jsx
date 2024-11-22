import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white py-2" style={{ backgroundColor: "#2c3e50" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2024 Energia Limpa. Todos os direitos reservados.</p>
          </div>
          <div className="col-md-6 text-md-right">
            <Link to="/#tipos-energia" className="text-white mx-2">Tipos de Energia</Link>
            <Link to="/#beneficios" className="text-white mx-2">Benefícios</Link>
            <Link to="/contato" target="_blank" className="text-white mx-2">Contato</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
