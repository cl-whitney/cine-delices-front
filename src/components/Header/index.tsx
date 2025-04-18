import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderLogIn from '../HeaderLogIn';

import './style.css';

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Ajout de useRef pour détecter les clics en dehors du champ de recherche
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Gère la mise à jour de l'état isMobile lors du redimensionnement de la fenêtre
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Ferme le champ de recherche lorsque l'on clique en dehors
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showSearch &&
        searchRef.current &&
        // Si l'utilisateur clique en dehors du champ de recherche, alors on le ferme
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showSearch]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`); // Redirige vers la page de recherche
  };

  return (
    <header>
      {/* à voir pour demain : rajouter la class is-fixed-top pour fix le nav et ensuite adapte
      le main */}
      <nav className="navbar nav flex-row">
        <div className="navbar-brand navbar-start">
          <Link className="navbar-item" to="/">
            <img src={'src/assets/logo.svg'} alt="Logo" loading="lazy" />
            <p>Ciné Délices</p>
          </Link>
        </div>

        <div className="navbar-end">
          {!isMobile ? (
            /* Affichage en desktop */
            <div className="navbar-item">
              <form onSubmit={handleSearch} className="flex-row">
                <input
                  className="input"
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="button btn-color" type="submit">
                  Chercher
                </button>
              </form>
            </div>
          ) : (
            /* Affichage en mobile */
            <div className="navbar-end">
              <div className="navbar-item">
                {/* Affiche le bouton uniquement si le champ de recherche n'est pas affiché */}
                {!showSearch && (
                  <button
                    type="button"
                    className="button"
                    onClick={(event) => {
                      event.stopPropagation(); // Empêche la fermeture immédiate
                      setShowSearch(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Champ de recherche qui apparaît en mobile */}
        {isMobile && showSearch && (
          <div ref={searchRef} className="navbar-item is-expanded">
            <form onSubmit={handleSearch} className="is-flex">
              <input
                className="input"
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="button btn-color" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
        )}
        <HeaderLogIn />
      </nav>
    </header>
  );
}
