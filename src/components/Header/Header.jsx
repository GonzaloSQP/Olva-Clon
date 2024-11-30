import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Header.css';
import olvaLogo from '../../assets/olva-logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="contact-info">
          <FontAwesomeIcon icon={faPhone} />
          <span>01 714 0909</span>
        </div>
        <div className="social-links">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
        <div className="user-actions">
          <button className="btn-live">SEGUIMIENTO EN VIVO</button>
          <button className="btn-client">ZONA CLIENTES</button>
          <button className="btn-portal">PORTAL OLVA</button>
        </div>
      </div>
      
      <nav className="main-nav">
        <div className="logo">
          <img src={olvaLogo} alt="Olva Courier" />
        </div>
        <ul className="nav-links">
          <li className="dropdown">
            <a href="#">CLIENTES ▼</a>
          </li>
          <li><a href="#">UBÍCANOS</a></li>
          <li><a href="#">COTIZADOR</a></li>
          <li><a href="#">NOTICIAS</a></li>
          <li><a href="#">CONTÁCTANOS</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;