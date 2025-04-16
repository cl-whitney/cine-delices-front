import { Link } from 'react-router-dom';
import './style.css';

export default function Footer() {
  return (
    <footer>
      <nav aria-label="Footer navigation">
        <ul className="footer-links">
          <li>
            <Link to="/mentions-legales">Mentions légales</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cgu">Conditions générales</Link>
          </li>
          <li>
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
          <img src="/src/assets/NetworkLogo/facebook.svg" alt="Logo Facebook" />
        </a>
        <a
          href="https://www.tiktok.com"
          aria-label="TikTok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/src/assets/NetworkLogo/tiktok.svg" alt="Logo TikTok" />
        </a>
        <a
          href="https://www.instagram.com"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/NetworkLogo/instagram.svg"
            alt="Logo Instagram"
          />
        </a>
        <a
          href="https://www.pinterest.com"
          aria-label="Pinterest"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/NetworkLogo/pinterest.svg"
            alt="Logo Pinterest"
          />
        </a>
        <a
          href="https://www.youtube.com"
          aria-label="YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/src/assets/NetworkLogo/youtube.svg" alt="Logo YouTube" />
        </a>
      </div>
    </footer>
  );
}
