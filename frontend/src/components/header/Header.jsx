import React from "react";
import './Header.css'

const Header = () => {
    return (
      <header className="header">
  <div className="header-container">
    <a href="/" className="header-logo">
      <img 
        src="https://ofertas.vw.com.br/_next/static/media/vwLogo.3bf47511.svg" 
        alt="Logo Loja de Carros" 
      />
    </a>
    <nav className="header-nav">
      <a href="/" className="nav-link">Início</a>
      <a href="/cars" className="nav-link">Modelos</a>
    </nav>
  </div>
</header>
    );
  };
  
  export default Header;