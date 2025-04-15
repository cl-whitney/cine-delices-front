import { NavLink } from 'react-router-dom';
import HeaderLogIn from '../HeaderLogIn';

export default function Header() {
  return (
    <header>
      {/* En-tête du site */}
      <nav aria-label="Main navigation" className="navbar">
        {/* Logo du site */}
        <NavLink
          to="/"
          className="navbar-brand"
          aria-label="Retour à l'accueil"
        >
          <img src="/images/logo.png" alt="Logo Délices" className="logo" />
        </NavLink>

        {/* Formulaire de recherche */}
        <form
          className="search-form"
          aria-label="Formulaire de recherche de recette"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="searchInput" className="visually-hidden">
            Recherche une recette
          </label>
          <input
            type="search"
            id="searchInput"
            name="search"
            placeholder="Recherche une recette..."
            aria-label="Recherche une recette"
          />
          <button
            type="submit"
            // onClick={() => }
          >
            Rechercher
          </button>
        </form>
      </nav>
      <HeaderLogIn />
    </header>
  );
}
