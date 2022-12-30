import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Matheus Trinca</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre Mim
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projetos
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Serviços
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/matheus-trinca"
            className="footer__social-link"
            target="_blank"
          >
            <i style={{ marginTop: 4 }} className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5514999014372"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-whatsapp"></i>
          </a>
          <a
            href="https://github.com/MatheusTrinca"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Todos os Direitos Reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
