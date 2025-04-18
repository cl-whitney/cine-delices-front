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
    <header className="p-4 bg-base-100 shadow-md">
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
            <form
              onSubmit={handleSearch}
              className="flex items-center space-x-2"
            >
              <input
                className="input input-bordered"
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">
                Chercher
              </button>
            </form>
          ) : (
            <button
              type="button"
              className="btn btn-circle btn-outline"
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
            className="absolute top-16 left-0 w-full p-4 bg-base-200"
          >
            <form
              onSubmit={handleSearch}
              className="flex items-center space-x-2"
            >
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">
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
