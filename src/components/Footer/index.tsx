import {
  faFacebook,
  faPinterest,
  faSquareInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Liens texte */}
      <nav
        aria-label="Liens de bas de page"
        className="bg-[var(--background-color)]"
      >
        <div className="mx-auto w-[92%] max-w-6xl">
          <ul className="flex flex-col items-center gap-3 py-4 text-sm md:flex-row md:justify-between md:gap-6 md:py-5">
            <li>
              <Link
                to="/mentions-legales"
                className="inline-block text-black hover:text-[var(--button-color)]"
              >
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="inline-block text-black hover:text-[var(--button-color)]"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/cgu"
                className="inline-block text-black hover:text-[var(--button-color)]"
              >
                Conditions générales
              </Link>
            </li>
            <li>
              <Link
                to="/a-propos"
                className="inline-block text-black hover:text-[var(--button-color)]"
              >
                À propos
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Réseaux sociaux */}
      <div className="bg-[var(--background-secondary-color)]">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="flex justify-center gap-6 py-3 md:gap-8 md:py-4 text-white">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faFacebook} className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faTiktok} className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faSquareInstagram} className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faPinterest} className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faYoutube} className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
