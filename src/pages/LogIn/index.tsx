import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogStore } from '../../store/LogStore';

export default function LoginPage() {
  const navigate = useNavigate();

  const { login } = useLogStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (_e) {
      // console.log('Erreur :', _e);
    }
  };

  // TODO : A recheck avec la branch 03f
  return (
    <div>
      <h1>SE CONNECTER</h1>
      <form method="post">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Entrez votre email"
          aria-label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          value={password}
          name="password"
          placeholder="Entrez votre mot de passe"
          aria-label="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="btn rounded-full text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors"
          // TODO : Ajouter une page pour reset les mots de passes
          // onClick={() => }
          aria-label="Mot de passe oublié"
        >
          Mot de passe oublié
        </button>
        <button
          type="submit"
          className="btn rounded-full text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors"
          onClick={handleLogIn}
          aria-label="Se connecter"
        >
          Se connecter
        </button>
      </form>
      <p className="or-text">Ou</p>
      <button
        type="button"
        className="btn rounded-full text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors"
        onClick={() => navigate('/inscription')}
        aria-label="Créer un compte"
      >
        Créer un compte
      </button>
    </div>
  );
}
