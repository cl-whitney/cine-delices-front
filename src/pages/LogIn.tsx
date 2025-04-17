import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>SE CONNECTER</h1>
      <form>
        <label htmlFor="emailOrUsername">Email ou Pseudo</label>
        <input
          type="text"
          id="emailOrUsername"
          name="emailOrUsername"
          placeholder="Entrez votre email ou pseudo"
          aria-label="Email ou Pseudo"
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Entrez votre mot de passe"
          aria-label="Mot de passe"
        />
        <button
          type="button"
          className="button btn-color  is-rounded"
          // onClick={() => }
          aria-label="Mot de passe oublié"
        >
          Mot de passe oublié
        </button>
        <button
          type="button"
          className="button btn-color  is-rounded"
          // onClick={() => }
          aria-label="Se connecter"
        >
          Se connecter
        </button>
      </form>
      <p className="or-text">Ou</p>
      <button
        type="button"
        className="button btn-color  is-rounded"
        onClick={() => navigate('/inscription')}
        aria-label="Créer un compte"
      >
        Créer un compte
      </button>
    </div>
  );
}
