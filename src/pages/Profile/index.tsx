import './style.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UserPage() {
  return (
    <div>
      <div className="title-personnal-info">
        <FontAwesomeIcon
          icon={faUser}
          size="2xl"
          style={{ color: 'var(--button-color)' }}
          aria-label="Icône utilisateur"
        />
        <h1>Utilisateur</h1>
      </div>

      {/* Section Informations Personnelles */}
      <div className="personal-info-div">
        <section aria-labelledby="personal-info">
          <h2 id="personal-info">Informations personnelles</h2>
          <form className="personal-info-form">
            <div>
              <label htmlFor="username">Nom (ou Pseudo)</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Entrez votre nom ou pseudo"
              />
            </div>
            <div>
              <label htmlFor="firstname">Prénom</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Entrez votre prénom"
              />
            </div>
            <div className="full-width">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Entrez votre email"
              />
            </div>
          </form>
        </section>
      </div>

      {/* Section Recettes */}
      <h2 id="recipes">Mes Recettes</h2>
      <div className="personal-recipe-div">
        <section className="my-recipe" aria-labelledby="recipes">
          <ul>
            {['Recette'].map((recipe, index) => (
              <li
                key={index}
                className="recipe-item"
                aria-label={`Recette ${index + 1}`}
              >
                {recipe}
                <button
                  type="button"
                  className="button btn-color  is-rounded btn-small"
                  aria-label={`Éditer la recette ${index + 1}`}
                  // onClick={() => }
                >
                  Éditer
                </button>
                <button
                  type="button"
                  className="button btn-color  is-rounded btn-small"
                  aria-label={`Supprimer la recette ${index + 1}`}
                  // onClick={() => }
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="button-add-dell-recipe">
        <button
          type="button"
          className="button btn-color  is-rounded "
          aria-label="Ajouter une nouvelle recette"
          // onClick={() => }
        >
          Ajouter une recette
        </button>
        {/* Bouton Supprimer le Compte */}
        <button
          type="button"
          className="button btn-color  is-rounded"
          aria-label="Supprimer mon compte"
          // onClick={() => }
        >
          Supprimer mon compte
        </button>
      </div>
    </div>
  );
}
