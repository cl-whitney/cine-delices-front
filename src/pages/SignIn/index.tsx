import { Link } from 'react-router-dom';

export default function AccountCreationPage() {
  return (
    <div className="flex flex-col items-center justify-center mb: min-h-[75vh] ">
      <div className="w-full max-w-md border-2 border-gray-300 rounded-lg px-8 py-4 my-4 shadow-2xl">
        <h2 className="text-center text-shadow-lg">Création de compte</h2>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col border-gray-300">
            <label htmlFor="lastName" className="mb-1 font-bold">
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Entrer votre nom"
              aria-label="Entrer votre nom"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-[var(--button-color)] p-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-1 font-bold">
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Entrer votre prénom"
              aria-label="Entrer votre prénom"
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
              placeholder="Entrer votre email"
              aria-label="Entrer votre email"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-[var(--button-color)] p-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 font-bold">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Entrer votre mot de passe"
              aria-label="Entrer votre mot de passe"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-[var(--button-color)] p-1"
            />
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="terms" className="text-sm">
              J’ai lu, j’accepte les{' '}
              <Link
                to="/cgu"
                className="text-[var(--button-color)] underline"
                aria-label="Conditions Générales"
              >
                Conditions Générales
              </Link>{' '}
              et la{' '}
              <Link
                to="/mentions-legales"
                className="text-[var(--button-color)] underline"
                aria-label="Politique de Confidentialité"
              >
                Politique de Confidentialité
              </Link>
              .
            </label>
          </div>
          <button
            type="button"
            className="btn rounded-full text-white text-lg bg-[var(--button-color)] hover:bg-[#a31616] transition-colors my-2"
            aria-label="S’enregistrer"
          >
            S’enregistrer
          </button>
        </form>
      </div>
    </div>
  );
}
