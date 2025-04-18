import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTiktok,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      //Ajustement pour éviter l'affichage du footer trop tôt
      setIsVisible(scrollPosition >= pageHeight - 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <div className={`footer-contanier ${isVisible ? 'visible' : ''}`}>
      <footer>
        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            <li className="footer-li">
              <Link to="/mentions-legales">Mentions légales</Link>
            </li>
            <li className="footer-li">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="footer-li">
              <Link to="/cgu">Conditions générales</Link>
            </li>
            <li className="footer-li">
              <Link to="/a-propos">À propos</Link>
            </li>
          </ul>
        </nav>
        <div className="social-media">
          <a
            href="https://www.facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="icon"
              aria-label="logo facebook"
            />
          </a>
          <a
            href="https://www.tiktok.com"
            aria-label="TikTok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              className="icon"
              aria-label="logo tiktok"
            />
          </a>
          <a
            href="https://www.instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="icon"
              aria-label="logo instagram"
            />
          </a>
          <a
            href="https://www.pinterest.com"
            aria-label="Pinterest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faPinterest}
              className="icon"
              aria-label="logo pinterest"
            />
          </a>
          <a
            href="https://www.youtube.com"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="icon"
              aria-label="logo youtube"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
