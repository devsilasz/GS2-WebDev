import '../App.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TiposEnergia from '../components/TiposEnergia';
import { useNavigate } from 'react-router-dom';
import BeneficiosEnergia from '../components/BeneficiosEnergia';

function Home() {
  const navigate = useNavigate();

 
  const isLoggedIn = localStorage.getItem('nome');

  if (!isLoggedIn) {
    navigate('/');
    return null; 
  }

  return (
    <>
      <Navbar />
      <Hero />
      <TiposEnergia />
      <BeneficiosEnergia />
    </>
  );
}

export default Home;
