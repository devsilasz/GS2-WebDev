import { useState, useEffect } from 'react';

const BeneficiosEnergia = () => {
  const [dadosApi, setDadosApi] = useState(null);
  const [erroApi, setErroApi] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_KEY = 'e1a3b813d0a14bcf20347b7b9708a678'; 
        const lat = -23.5953;  
        const lon = -46.6359;  

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&appid=${API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error('Erro ao acessar a API. Verifique a chave de API e as coordenadas.');
        }

        const data = await response.json();

        if (data.hourly && data.hourly.length > 0) {
          const radiaçãoSolar = data.hourly[0].radiation || 'Dados de radiação solar não disponíveis'; 
          const velocidadeVento = data.hourly[0].wind_speed; // Velocidade do vento

          setDadosApi({ radiaçãoSolar, velocidadeVento });
        } else {
          setErroApi('Dados climáticos não encontrados.');
        }
      } catch (error) {
        setErroApi(`Erro ao buscar dados da API: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="beneficios-energia" className="section d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-4 font-weight-bold">Energia Limpa para um Futuro Sustentável</h1>
            <p className="lead">
              A energia limpa tem muitos benefícios:
              <ul>
                <li><strong>Redução de Emissões de CO2:</strong> A energia solar e eólica não geram gases de efeito estufa.</li>
                <li><strong>Economia a Longo Prazo:</strong> Após o investimento inicial, a manutenção de sistemas solares e eólicos é barata e a energia é gratuita.</li>
                <li><strong>Independência Energética:</strong> A produção local de energia limpa reduz a dependência de combustíveis fósseis.</li>
                <li><strong>Benefícios para a Saúde:</strong> Menos poluição do ar significa menos doenças respiratórias e uma melhor qualidade de vida.</li>
              </ul>
            </p>
          </div>

          <div className="col-md-6">
            <h2>Dados sobre Energia Limpa</h2>
            {erroApi ? (
              <p>{erroApi}</p>
            ) : dadosApi ? (
              <div>
                <p><strong>Radiação Solar:</strong> {dadosApi.radiacãoSolar}</p>
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
