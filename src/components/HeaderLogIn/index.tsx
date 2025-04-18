import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeaderLogIn() {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);

    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isActive &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isActive]);

  const toggleMenu = () => setIsActive(!isActive);

  return (
    <div className="flex justify-end">
      {/* Bouton burger visible en mobile */}
      {isMobile && (
        <button
          type="button"
          className={`btn btn-square btn-outline ${isActive ? 'bg-base-300' : ''}`}
          aria-label="menu"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-700" />
        </button>
      )}

      {/* Menu déroulant mobile */}
      {isMobile && isActive && (
        <div
          ref={menuRef}
          className="absolute right-4 mt-2 bg-base-100 shadow-lg rounded-lg p-4"
        >
          <Link to="/inscription" className="block px-4 py-2 hover:bg-base-200">
            Inscription
          </Link>
          <Link to="/connexion" className="block px-4 py-2 hover:bg-base-200">
            Se Connecter
          </Link>
        </div>
      )}

      {/* Boutons visibles en desktop */}
      {!isMobile && (
        <div className="flex space-x-4">
          <Link to="/inscription" className="btn btn-primary">
            Inscription
          </Link>
          <Link to="/connexion" className="btn btn-outline log-in">
            Se Connecter
          </Link>
        </div>
      )}
    </div>
  );
}
