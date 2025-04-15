import { Link } from 'react-router-dom';

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
            <Link to="/conditions-generales">Conditions générales</Link>
          </li>
          <li>
            <Link to="/a-propos">À propos</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
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
          <img src="/images/facebook-icon.png" alt="Logo Facebook" />
        </a>
        <a
          href="https://www.tiktok.com"
          aria-label="TikTok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/tiktok-icon.png" alt="Logo TikTok" />
        </a>
        <a
          href="https://www.instagram.com"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/instagram-icon.png" alt="Logo Instagram" />
        </a>
        <a
          href="https://www.pinterest.com"
          aria-label="Pinterest"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/pinterest-icon.png" alt="Logo Pinterest" />
        </a>
        <a
          href="https://www.youtube.com"
          aria-label="YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/youtube-icon.png" alt="Logo YouTube" />
        </a>
      </div>
    </footer>
  );
}
