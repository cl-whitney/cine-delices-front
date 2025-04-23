import {
  faFacebook,
  faPinterest,
  faSquareInstagram,
  faTiktok,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer className="h-screen">
        <nav
          aria-label="Footer navigation"
          className="bg-[var(--background-color)] p-2 rounded-t-lg"
        >
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
        <div className="bg-red-700 p-2 flex justify-evenly text-white text-xl">
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
              icon={faSquareInstagram}
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
