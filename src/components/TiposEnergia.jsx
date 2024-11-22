import PainelSolarImg from '../assets/images/painel-solar.webp';
import TurbinaEolicaImg from '../assets/images/turbina-eolica.webp';
import UsinaHidreletricaImg from '../assets/images/usina-hidreletrica.webp';
const TiposEnergia = () => {

  return (
    <section id="tipos-energia" className="section direita">
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col">
            <h2 className="display-4 font-weight-bold">Tipos de Energia Limpa</h2>
            <p className="lead">Explorando fontes como solar, eólica e hidrelétrica, que ajudam a reduzir as emissões de carbono.</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card shadow-sm">
              <img src={PainelSolarImg} className="card-img-top" alt="Painel Solar" />
              <div className="card-body">
                <h5 className="card-title">Painéis Solares</h5>
                <p className="card-text lead">Convertem energia do sol em eletricidade.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card shadow-sm">
              <img src={TurbinaEolicaImg} className="card-img-top" alt="Turbina Eólica" />
              <div className="card-body">
                <h5 className="card-title">Turbinas Eólicas</h5>
                <p className="card-text lead">Aproveitam a força do vento para gerar energia.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card shadow-sm">
              <img src={UsinaHidreletricaImg} className="card-img-top" alt="Usina Hidrelétrica" />
              <div className="card-body">
                <h5 className="card-title">Usinas Hidrelétricas</h5>
                <p className="card-text lead">Utilizam a força da água em movimento.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TiposEnergia;
