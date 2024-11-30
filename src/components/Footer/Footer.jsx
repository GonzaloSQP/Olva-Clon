import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">NOSOTROS</a>
        <a href="#">RESPONSABILIDAD SOCIAL</a>
        <a href="#">MANUAL DE EMBALAJE</a>
        <a href="#">BOLSA LABORAL</a>
        <a href="#">SISTEMA DE GESTIÓN ANTISOBORNO</a>
        <a href="#">TUTORIAL ZONA CLIENTES</a>
        <a href="#">MERCANCÍA PELIGROSA</a>
        <a href="#">MERCANCÍA PROHIBIDA</a>
        <a href="#">FACTURACIÓN ELECTRÓNICA</a>
      </div>

      <div className="footer-secondary">
        <a href="#">PREGUNTAS FRECUENTES</a>
        <a href="#">POLÍTICAS DE PRIVACIDAD</a>
        <a href="#">TÉRMINOS Y CONDICIONES</a>
      </div>

      <div className="footer-apps">
        <div className="book">LIBRO DE RECLAMACIONES</div>
        <div className="app-stores">
          <a href="#" className="store-badge">App Store</a>
          <a href="#" className="store-badge">Google Play</a>
          <a href="#" className="store-badge">AppGallery</a>
        </div>
      </div>

      <div className="footer-social">
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
      </div>

      <div className="footer-copyright">
        <p>OLVA COURIER</p>
        <p>TODOS LOS DERECHOS RESERVADOS 2022</p>
      </div>
    </footer>
  );
};

export default Footer;