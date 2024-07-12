import React from 'react';
import { Link } from 'react-router-dom';
import '../navbarstyle.css';

const Navbar = () => {
  // Função para verificar se o usuário está autenticado como admin baseado no token JWT
  const isAuthenticatedAsAdmin = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) return false;

    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      return decodedToken.tipo === 'admin';
    } catch (error) {
      console.error('Erro ao decodificar token:', error.message);
      return false;
    }
  };

  // Função para realizar log-out
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    // Redirecionar para a página de login ou página inicial
    window.location.href = '/login'; // ou a página inicial do seu aplicativo
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong fixed-top">
      <Link className="navbar-brand logo" to="/"><img src="https://imgur.com/eRf7rtL.png" alt="Logo" /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              LOJA
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="destaques.html">Destaques</Link>
              <Link className="dropdown-item" to="carrinho.html">Carrinho</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="biblioteca.html">BIBLIOTECA</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/about'}>SOBRE</Link>
          </li>
          {/* Mostrar link para Dashboard apenas se o usuário estiver autenticado como admin */}
          {isAuthenticatedAsAdmin() && (
            <li className="nav-item">
              <Link className="nav-link" to="dashboard.html">DASHBOARD</Link>
            </li>
          )}
        </ul>
        <form className="form-inline my-2 my-lg-0 ml-auto">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-dark my-2 my-sm-0" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="perfil.html"><i className="fa fa-user fa-2x" aria-hidden="true"></i></Link>
          </li>
          {/* Renderização condicional do botão de log-out/log-in */}
          <li className="nav-item">
            {isAuthenticatedAsAdmin() ? (
              <button className="btn btn-link nav-link" onClick={handleLogout}>Log-out</button>
            ) : (
              <Link className="nav-link" to="/login">Log-in</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
