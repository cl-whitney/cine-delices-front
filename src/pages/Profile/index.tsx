import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UserPage() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={faUser}
          size="xl"
          style={{ color: 'var(--button-color)' }}
          aria-label="Icône utilisateur"
        />
        <h2 className="text-shadow-lg">Informations personnelles</h2>
      </div>
      {/* Section Informations Personnelles */}
      <div className="w-full max-w-4xl border-2 border-gray-300 rounded-lg px-8 py-4 my-4 shadow-xl sm:max-w-5xl sm:py-8">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-1 font-bold">
              Nom
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Entrez votre nom ou pseudo"
              aria-label="Nom ou Pseudo"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-[var(--button-color)] p-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstname" className="mb-1 font-bold">
              Prénom
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Entrez votre prénom"
              aria-label="Prénom"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-[var(--button-color)] p-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Entrez votre email"
              aria-label="Email"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-[var(--button-color)] p-1"
            />
          </div>
        </form>
      </div>
      {/* Section Recettes */}
      <div className="flex items-center gap-2 ">
        <FontAwesomeIcon
          icon={faUtensils}
          size="xl"
          style={{ color: 'var(--button-color)' }}
          aria-label="Icône cuisine"
        />
        <h2 className="text-shadow-lg">Mes Recettes</h2>
      </div>
      <div className="w-full max-w-7xl border-2 border-gray-300 rounded-lg px-8 py-4 my-4 sm:max-w-5xl sm:py-8 shadow-xl">
        <section className="my-recipe" aria-labelledby="recipes">
          <ul className="flex flex-col gap-6">
            {['Recette'].map((recipe, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b-2 border-gray-300 pb-2 gap-4 sm:gap-0"
                aria-label={`Recette ${index + 1}`}
              >
                <span className="font-bold text-xl">{recipe}</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="btn btn-m rounded-full text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors"
                    aria-label={`Éditer la recette ${index + 1}`}
                  >
                    Éditer
                  </button>
                  <button
                    type="button"
                    className="btn btn-m rounded-full text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors"
                    aria-label={`Supprimer la recette ${index + 1}`}
                  >
                    Supprimer
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="my-16 flex flex-col sm:flex-row gap-4">
        <button
          type="button"
          className="btn rounded-full btn-lg text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors"
          aria-label="Ajouter une nouvelle recette"
        >
          Ajouter une recette
        </button>
        {/* Bouton Supprimer le Compte */}
        <button
          type="button"
          className="btn rounded-full btn-lg text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors"
          aria-label="Supprimer mon compte"
        >
          Supprimer mon compte
        </button>
      </div>
    </div>
  );
}
