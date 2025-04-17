import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function HeaderLogIn() {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Par défaut false, mis à jour après le rendu

  useEffect(() => {
    // Vérifier la largeur au premier rendu
    setIsMobile(window.innerWidth < 1024);

    // Écouter les changements de taille
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsActive(!isActive);

  return (
    <div className="burger-container navbar-end">
      {/* Affichage du bouton burger uniquement en mobile */}
      {isMobile && (
        <button
          type="button"
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      )}

      {/* Affichage du menu déroulant uniquement si actif */}
      {isMobile && isActive && (
        <div className={`navbar-item is-right ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-dropdown">
            <Link to="/inscription" className="navbar-item">
              Inscription
            </Link>
            <Link to="/connexion" className="navbar-item">
              Se Connecter
            </Link>
          </div>
        </div>
      )}

      {/* Affichage des boutons uniquement en desktop */}
      {!isMobile && (
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons space-between">
              <Link to="/inscription" className="button btn-color ">
                Inscription
              </Link>
              <Link to="/connexion" className="button log-in">
                Se Connecter
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
