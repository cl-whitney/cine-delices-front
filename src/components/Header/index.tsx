import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderLogIn from '../HeaderLogIn';

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showSearch && searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showSearch]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
    setShowSearch(false);
  };

  return (
    <header className="fixed top-0 w-full bg-[var(--background-color)] shadow-2xl z-50 p-2 rounded-b-lg">
      {/* Desktop */}
      {!isMobile && (
        <nav className="relative flex items-center justify-between pr-5">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center text-lg font-semibold">
              <img
                src={'src/assets/logos/logo-desktop.svg'}
                alt="CinéDélices"
                loading="lazy"
                className="h-20"
              />
            </Link>
          </div>

          <form onSubmit={handleSearch}>
            <div className="flex flex-row items-center w-96">
              <input
                type="text"
                placeholder="Rechercher une recette…"
                className="input rounded-l-full focus:outline-none border-0 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ height: '40px' }}
              />
              <Link to="/recettes">
                <button
                  type="submit"
                  className="btn bg-white text-black rounded-r-full border-0"
                  style={{ height: '40px', width: '40px' }}
                >
                  <FontAwesomeIcon icon={faSearch} color="black" />
                </button>
              </Link>
            </div>
          </form>

          <HeaderLogIn />
        </nav>
      )}

      {/* Mobile */}
      {isMobile && (
        <nav className="relative grid grid-cols-3 items-center">
          {/* Colonne gauche : Burger (via HeaderLogIn) */}
          <div className="flex items-center text-[#604D3D]">
            <HeaderLogIn />
          </div>

          {/* Colonne centre : Logo mobile */}
          <div className="flex justify-center">
            <Link to="/" aria-label="Accueil CinéDélices">
              <img
                src={'src/assets/logos/logo-mobile.svg'}
                alt="CinéDélices"
                loading="lazy"
                className="h-10"
              />
            </Link>
          </div>

          {/* Colonne droite : loupe */}
          <div className="flex justify-end pr-2">
            <button
              type="button"
              className="p-2"
              onClick={(event) => {
                event.stopPropagation();
                setShowSearch(true);
              }}
              aria-label="Ouvrir la recherche"
            >
              <FontAwesomeIcon icon={faSearch} className="text-[#604D3D] text-xl" />
            </button>
          </div>

          {/* Barre de recherche déroulante */}
          {showSearch && (
            <div
              ref={searchRef}
              className="absolute top-14 left-0 w-full p-3 bg-base-200 shadow-lg rounded-lg"
            >
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  placeholder="Rechercher…"
                  className="input rounded-l-full focus:outline-none border-0 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ height: '40px' }}
                />
                <Link to="/recettes">
                  <button
                    type="submit"
                    className="btn bg-white text-black rounded-r-full border-0"
                    style={{ height: '40px', width: '40px' }}
                  >
                    <FontAwesomeIcon icon={faSearch} color="black" />
                  </button>
                </Link>
              </form>
            </div>
          )}
        </nav>
      )}
    </header>
  );
}
