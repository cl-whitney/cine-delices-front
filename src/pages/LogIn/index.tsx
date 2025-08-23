import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogStore } from "../../store/LogStore";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useLogStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch {}
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] w-full flex items-start md:items-center justify-center pt-10 md:pt-0">
      <div className="w-[92%] max-w-xl border border-gray-300 rounded-xl bg-white shadow-sm px-6 md:px-10 py-10">
        <h1 className="text-center text-2xl md:text-3xl font-extrabold tracking-wide mb-10 text-[#604D3D]">
          SE CONNECTER
        </h1>

        <form method="post" onSubmit={handleLogIn} className="space-y-6">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              placeholder="Email ou Pseudo"
              aria-label="Email ou Pseudo"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 rounded-md bg-gray-200/70 border border-gray-300 px-4 text-gray-800 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--button-color)]"
            />
          </div>

          <div>
            <input
              type="password"
              id="password"
              value={password}
              name="password"
              required
              placeholder="Mot de passe"
              aria-label="Mot de passe"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-14 rounded-md bg-gray-200/70 border border-gray-300 px-4 text-gray-800 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--button-color)]"
            />
          </div>

          <div className="flex justify-end -mt-2">
            <button
              type="button"
              aria-label="Mot de passe oublié"
              className="text-sm text-gray-600 hover:text-gray-800 underline underline-offset-2"
              onClick={() => navigate("/mot-de-passe-oublie")}
            >
              Mot de passe oublié
            </button>
          </div>

          <button
            type="submit"
            aria-label="Se connecter"
            className="w-full h-12 rounded-md bg-[var(--button-color)] text-white font-medium hover:bg-[#a31616] transition-colors"
          >
            Se connecter
          </button>
        </form>

        <div className="my-6 text-center text-gray-600">Ou</div>

        <button
          type="button"
          aria-label="Créer un compte"
          onClick={() => navigate("/inscription")}
          className="w-full h-12 rounded-md bg-[var(--button-color)] text-white font-medium hover:bg-[#a31616] transition-colors"
        >
          Créer un compte
        </button>
      </div>
    </div>
  );
}
