import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return(
  <footer className="footer-ordi">
    <div className="flex-between footer-container">
      <div className="flex-column footer-column">
        <Link href="#">
          <p>Politique de confidentialité</p>
        </Link>
        <Link href="#">
          <p>Mentions légales</p>
        </Link>
      </div>

      <div className="flex-column footer-column">
        <Link href="#">
          <p>Qui sommes-nous ?</p>
        </Link>
        <Link href="#">
          <p>Espace marque</p>
        </Link>
      </div>

      <div className="flex-column footer-column">
        <Link href="#">
          <p>Contactez-nous</p>
        </Link>
        <Link href="#">
          <p className="phone">01 84 88 47 96</p>
        </Link>
      </div>

      <div className="img-footer-container footer-column">
        <img src={'/footerLogo.svg'} alt=""/>
      </div>


    </div>
  </footer>
  );
};

export default Footer
