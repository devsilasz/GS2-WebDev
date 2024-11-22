import { useState, useEffect } from 'react';

const BeneficiosEnergia = () => {
  const [dadosApi, setDadosApi] = useState(null);
  const [erroApi, setErroApi] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_KEY = '704de827884efb8da7cd69468d063bab';
        const lat = -23.5953;
        const lon = -46.6359;

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=-23.5953&lon=-46.6359&appid=704de827884efb8da7cd69468d063bab&units=metric`
        );

        if (!response.ok) {
          throw new Error('Erro ao acessar a API. Verifique a chave de API e as coordenadas.');
        }

        const data = await response.json();

        // Extrair os dados do JSON
        const temperatura = data.main.temp;
        const umidade = data.main.humidity;
        const velocidadeVento = data.wind.speed;

        setDadosApi({ temperatura, umidade, velocidadeVento });
      } catch (error) {
        setErroApi(`Erro ao buscar dados da API: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="beneficios-energia" className="section d-flex align-items-center py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-4 font-weight-bold">Benefícios Climáticos da Energia Limpa</h1>
            <p className="lead">
              A energia limpa tem muitos benefícios:
              <ul>
                <li><strong>Mitigação das Mudanças Climáticas:</strong> A energia solar e eólica reduzem significativamente as emissões de carbono, ajudando a conter o aquecimento global.</li>
                <li><strong>Menor Poluição Atmosférica:</strong> A substituição de combustíveis fósseis por fontes renováveis reduz a liberação de poluentes que afetam a qualidade do ar.</li>
                <li><strong>Preservação dos Recursos Naturais:</strong> A energia limpa utiliza recursos abundantes e renováveis, como luz solar e vento, diminuindo a exploração de combustíveis fósseis.</li>
                <li><strong>Proteção de Ecossistemas:</strong> A redução de emissões e poluentes evita impactos severos em habitats naturais e espécies vulneráveis.</li>
              </ul>
            </p>
          </div>

          <div className="col-md-6">
            <h2 className="mb-4">Dados sobre o Clima (Vila Mariana)</h2>
            {erroApi ? (
              <div className="alert alert-danger">{erroApi}</div>
            ) : dadosApi ? (
              <div className="card shadow p-4">
                <p><strong>Temperatura:</strong> {dadosApi.temperatura} °C</p>
                <p><strong>Umidade:</strong> {dadosApi.umidade} %</p>
                <p><strong>Velocidade do Vento:</strong> {dadosApi.velocidadeVento} m/s</p>
              </div>
            ) : (
              <p>Carregando dados...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosEnergia;
