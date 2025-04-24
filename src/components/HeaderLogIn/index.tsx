import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogStore } from '../../store/LogStore';

export default function HeaderLogIn() {
  const { user } = useLogStore();

  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 1024);
    updateIsMobile();

    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
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

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isActive]);

  const toggleMenu = () => setIsActive((prev) => !prev);

  return (
    <div className="flex justify-end relative">
      {/* Bouton burger visible en mobile */}
      {isMobile && (
        <button
          type="button"
          className={`btn btn-square btn-ghost ${isActive ? 'btn-active' : ''}`}
          aria-label="menu"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon
            icon={faBars}
            size="2xl"
            color={'var(--button-color'}
          />
        </button>
      )}

      {/* Menu déroulant mobile */}
      {isMobile && isActive && (
        <div
          ref={menuRef}
          className="absolute mt-10 bg-base-100 shadow-lg rounded-lg p-4 z-10 border border-gray-300 font-bold"
        >
          {!user ? (
            <>
              <Link
                to="/inscription"
                className="block px-4 py-2 text-l whitespace-nowrap border-b border-gray-300"
              >
                Inscription
              </Link>
              <Link
                to="/connexion"
                className="block px-4 py-2 text-l whitespace-nowrap"
              >
                Se Connecter
              </Link>
            </>
          ) : (
            <Link
              to="/deconnexion"
              className="block px-4 py-2 text-l whitespace-nowrap"
            >
              Se déconnecter
            </Link>
          )}
        </div>
      )}

      {/* Boutons visibles en desktop */}
      {!isMobile && (
        <div className="flex space-x-2">
          {!user ? (
            <>
              <Link
                to="/inscription"
                className="btn rounded-lg bg-[var(--button-color)] hover:bg-[#a31616] transition-colors text-white"
              >
                Inscription
              </Link>
              <Link
                to="/connexion"
                className="btn rounded-lg bg-white hover:bg-gray-100 transition-colors"
              >
                Se Connecter
              </Link>
            </>
          ) : (
            <Link
              to="/deconnexion"
              className="btn rounded-lg bg-[var(--button-color)] hover:bg-[#a31616] transition-colors text-white"
            >
              Se déconnecter
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
