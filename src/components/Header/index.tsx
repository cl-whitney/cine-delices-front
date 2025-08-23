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
      if (
        showSearch &&
        searchRef.current &&
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
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <header className="fixed top-0 w-full bg-[var(--background-color)] shadow-2xl z-1000 p-2 rounded-b-lg">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center text-lg font-semibold">
            <img
              src={'src/assets/logo.svg'}
              alt="Logo"
              loading="lazy"
              className="h-10"
            />
            <p className="ml-2">Ciné Délices</p>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {!isMobile ? (
            <form onSubmit={handleSearch}>
              <div className="flex flex-row items-center w-96">
                <input
                  type="text"
                  placeholder="Rechercher..."
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
          ) : (
            <button
              type="button"
              className="btn btn-circle btn-outline bg-[var(--button-color)] text-white"
              onClick={(event) => {
                event.stopPropagation();
                setShowSearch(true);
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          )}
        </div>

        {isMobile && showSearch && (
          <div
            ref={searchRef}
            className="absolute top-16 left-0 w-full p-4 bg-base-200 shadow-lg rounded-lg"
          >
            <form
              onSubmit={handleSearch}
              className="flex items-center space-x-2"
            >
              <div className="flex flex-row items-center w-full">
                <input
                  type="text"
                  placeholder="Rechercher..."
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
          </div>
        )}

        <HeaderLogIn />
      </nav>
    </header>
  );
}
