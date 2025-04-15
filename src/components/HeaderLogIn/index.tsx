import { useNavigate } from 'react-router-dom';

export default function HeaderLogIn() {
  const navigate = useNavigate();

  return (
    // Ajouter une condition (Si visiteur alors le code en dessous s'affiche, si utilisateur connecter, alors cf maquettes/wireframe)
    <div className="auth-buttons">
      <button
        type="button"
        onClick={() => navigate('/inscription')}
        aria-label="S'inscrire"
      >
        S'inscrire
      </button>
      <button
        type="button"
        onClick={() => navigate('/connexion')}
        aria-label="Se connecter"
      >
        Se connecter
      </button>
    </div>
  );
}
