import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] ">
      <div className="w-full max-w-md  border-2 border-gray-300 rounded-lg px-8 py-4 my-4 shadow-2xl sm:max-w-xl sm:py-8 ">
        <h2 className="text-center pb-2 text-shadow-lg">Connexion</h2>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="emailOrUsername" className="mb-1 font-bold">
              Identifiant
            </label>
            <input
              type="text"
              id="emailOrUsername"
              name="emailOrUsername"
              placeholder="Entrez votre email ou votre identifiant"
              aria-label="Email ou Pseudo"
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
              placeholder="Entrez votre mot de passe"
              aria-label="Mot de passe"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-[var(--button-color)] p-1"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              type="button"
              className="btn flex-1 rounded-full text-white text-lg py-2 bg-[var(--button-color)] hover:bg-[#a31616] transition-colors my-2"
              aria-label="Mot de passe oublié"
            >
              Mot de passe oublié
            </button>
            <button
              type="button"
              className="btn flex-1 rounded-full text-white text-lg py-2 bg-[var(--button-color)] hover:bg-[#a31616] transition-colors my-2"
              aria-label="Se connecter"
            >
              Se connecter
            </button>
          </div>
        </form>
        <button
          type="button"
          className="btn w-full rounded-full text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors text-lg py-3 mt-10 mb-2"
          onClick={() => navigate('/inscription')}
          aria-label="Créer un compte"
        >
          Créer un compte
        </button>
      </div>
    </div>
  );
}
