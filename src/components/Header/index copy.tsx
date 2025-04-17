import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import HeaderLogIn from '../HeaderLogIn';
import './style.css';

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <header className="header">
      {/* En-tête du site */}
      <nav aria-label="Main navigation" className="navbar">
        {/* Logo du site */}
        <NavLink
          to="/"
          className="navbar-brand"
          aria-label="Retour à l'accueil"
        >
          <img
            src={
              isMobile
                ? 'src/assets/logo_cineDelices_long.svg'
                : 'src/assets/logo_cineDelices.svg'
            }
            alt="Logo Délices"
            className="logo"
          />
        </NavLink>
      </nav>
      {/* Formulaire de recherche */}
      <div className="level-left">
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
              <button className="button" type="button" aria-label="Rechercher">
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
      <HeaderLogIn />
    </header>
  );
}
