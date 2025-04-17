import { useMediaQuery } from 'react-responsive';
import HeaderLogIn from '../HeaderLogIn';
import './style.css';

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <header className="header">
      {/* En-tête du site */}
      <nav className="navbar" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src={
                isMobile
                  ? 'src/assets/logo-desktop.svg'
                  : 'src/assets/logo-mobile.svg'
              }
              alt="Logo Délices"
              className="logo"
            />
          </a>
        </div>

        {/* Formulaire de recherche */}
        {isMobile ? (
          <div className="navbar-item has-dropdown is-active">
            <p className="control">
              <button
                className="navbar-link"
                type="button"
                aria-label="Rechercher"
              >
                <img
                  src="/src/assets/search.svg"
                  alt="Icône de loupe"
                  className="loupe-icon"
                />
              </button>
            </p>
          </div>
        ) : (
          <div className="search-bar">
            <div className="level-item">
              <div className="field has-addons">
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Chercher une recette..."
                  />
                </p>
                <p className="control">
                  <button
                    className="button"
                    type="button"
                    aria-label="Rechercher"
                  >
                    <img
                      src="/src/assets/search.svg"
                      alt="Icône de loupe"
                      className="loupe-icon"
                    />
                  </button>
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
      <HeaderLogIn />
    </header>
  );
}
