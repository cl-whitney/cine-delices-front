import { Link } from 'react-router-dom';

export default function AccountCreationPage() {
  return (
    <div>
      <h1>Création de compte</h1>
      <form>
        <div>
          <label htmlFor="lastName">Nom:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Entrer votre nom"
            aria-label="Entrer votre nom"
          />
        </div>
        <div>
          <label htmlFor="firstName">Prénom:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Entrer votre prénom"
            aria-label="Entrer votre prénom"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Entrer votre email"
            aria-label="Entrer votre email"
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Entrer votre mot de passe"
            aria-label="Entrer votre mot de passe"
          />
        </div>
        <div>
          <input type="checkbox" id="terms" name="terms" />
          <label htmlFor="terms">
            J’ai lu, j’accepte les{' '}
            <Link
              to="/terms"
              className="login-btn"
              // onClick={() => }
              aria-label="Conditions Générales"
            >
              Conditions Générales
            </Link>{' '}
            et la{' '}
            <Link
              to="/privacy"
              className="login-btn"
              // onClick={() => }
              aria-label="Politique de Confidentialité"
            >
              Politique de Confidentialité
            </Link>
            .
          </label>
        </div>
        <button
          type="button"
          className="button btn-color  is-rounded"
          // onClick={() => }
          aria-label="S’enregistrer"
        >
          S’enregistrer
        </button>
      </form>
    </div>
  );
}
