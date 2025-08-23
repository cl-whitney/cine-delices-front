import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLogStore } from '../../store/LogStore';

export default function HeaderLogIn() {
  const { user, logout } = useLogStore();
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex justify-end relative">
      {isMobile && (
        <button
          type="button"
          className={`btn btn-square btn-ghost ${isActive ? 'btn-active' : ''}`}
          aria-label="menu"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} size="2xl" className="text-inherit" />
        </button>
      )}

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
                S'inscrire
              </Link>
              <Link
                to="/connexion"
                className="block px-4 py-2 text-l whitespace-nowrap"
              >
                Se connecter
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profil"
                className="block px-4 py-2 text-l whitespace-nowrap border-b border-gray-300"
              >
                Mon Profil
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-l whitespace-nowrap"
              >
                Se déconnecter
              </button>
            </>
          )}
        </div>
      )}

      {!isMobile && (
        <div className="flex space-x-4 items-center">
          {!user ? (
            <>
              <Link
                to="/inscription"
                className="text-[#604D3D] font-semibold transition-colors hover:text-[#a31616]"
              >
                S'inscrire
              </Link>
              <Link
                to="/connexion"
                className="btn rounded-lg bg-[#604D3D] text-white font-semibold transition-colors hover:bg-[#a31616]"
              >
                Se connecter
              </Link>
            </>
          ) : (
            <>
              <Link to="/profil">
                <FontAwesomeIcon
                  icon={faUser}
                  size="2xl"
                  color="btn btn-primary bg-[var(--button-color)] border-none rounded-full p-2 aspect-square text-white"
                />
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="btn rounded-lg bg-[var(--button-color)] hover:bg-[#a31616] transition-colors text-white"
              >
                Se déconnecter
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
