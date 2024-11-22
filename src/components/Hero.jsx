import Imagem from '../assets/images/imagem.jpg';

const Hero = () => {
  return (
    <section id="hero" className="section esquerda d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-4 font-weight-bold">Energia Limpa para um Futuro Sustentável</h1>
            <p className="lead">
              Descubra como as fontes de energia renovável podem preservar o meio ambiente e melhorar a qualidade de vida global. Do sol ao vento, cada fonte possui um papel crucial para o nosso futuro.
            </p>
            
          </div>
          <div className="col-md-6 image-hero">
            <img
              src={Imagem}
              alt="Imagem de uma turbina eólica ao pôr do sol"
              className="img-fluid rounded-custom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
