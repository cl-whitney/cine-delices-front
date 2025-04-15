export default function UserPage() {
  return (
    <div>
      <div>
        <img src="#" alt="Avatar de profil" />
        <h1>Page utilisateur</h1>
      </div>

      {/* Section Informations Personnelles */}
      <section aria-labelledby="personal-info">
        <h2 id="personal-info">Informations personnelles</h2>
        <form>
          <label htmlFor="username">Nom (ou Pseudo)</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Entrez votre nom ou pseudo"
          />
          <label htmlFor="firstname">Prénom</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Entrez votre prénom"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Entrez votre email"
          />
        </form>
      </section>

      {/* Section Recettes */}
      <section aria-labelledby="recipes">
        <h2 id="recipes">Mes recettes</h2>
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
                className="edit-recipe-button"
                aria-label={`Éditer la recette ${index + 1}`}
                // onClick={() => }
              >
                Éditer
              </button>
              <button
                type="button"
                className="delete-recipe-button"
                aria-label={`Supprimer la recette ${index + 1}`}
                // onClick={() => }
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      </section>

      <button
        type="button"
        className="add-recipe-button"
        aria-label="Ajouter une nouvelle recette"
        // onClick={() => }
      >
        Ajouter une recette
      </button>

      {/* Bouton Supprimer le Compte */}
      <button
        type="button"
        className="delete-account-button"
        aria-label="Supprimer mon compte"
        // onClick={() => }
      >
        Supprimer mon compte
      </button>
    </div>
  );
}
