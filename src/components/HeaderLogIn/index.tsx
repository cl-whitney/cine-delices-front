import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

// TODO: Il manque la partie avec l'autentification (pb de commit ?)

export default function HeaderLogIn() {
  //Utilisation du state pour l'état d'ouverture du menu
  const [menuOpen, setMenuOpen] = useState(false);
  // Fonction qui permet d'inverser l'état du menu (ici: ouvert / fermé)
  // Lors de l'appel fonction, menuOpen passe de false à true, ou alors de true à false
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    // Ajouter une condition (Si visiteur alors le code en dessous s'affiche, si utilisateur connecter, alors cf maquettes/wireframe)
    <nav>
      <button
        className="btnBurger"
        type="button" //Rappel: type="button" pour éviter l'effet submit par défault du <button>
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={menuOpen}
      >
        {/* Ici: Mesure temporaire avec l'utilisation des triple span pour imiter un icone de bouton burger */}
        <span />
        <span />
        <span />
      </button>
      {/* Affichage dynamique: en fonction de la valeur du state, la classe 'open' est ajoutée ou supprimée */}
      <ul id="nav-list" className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to="/" aria-label="Accueil">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/inscription" aria-label="S'inscrire">
            S'inscrire
          </NavLink>
        </li>
        <li>
          <NavLink to="/connexion" aria-label="Se connecter">
            Se connecter
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
