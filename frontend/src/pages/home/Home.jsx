import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div>
    <Header />
    <div className="home">
  <h2>Bem-vindo à Concessionária Volkswagen</h2>
  <p>Descubra os melhores veículos com a qualidade e inovação que você merece!</p>
  <div className="home-banner">
    <img 
      src="https://http2.mlstatic.com/D_NQ_NP_890644-MLA75858822890_042024-B.webp" 
      alt="Carro Volkswagen" 
      className="home-logo"
    />
    <p className="home-texto">
      Explore nossos modelos, e conheça nossas ofertas!!
    </p>
    <a href="/cars" className="home-botao">Ver Modelos</a>
  </div>
</div>
  </div>
  );
};

export default Home;