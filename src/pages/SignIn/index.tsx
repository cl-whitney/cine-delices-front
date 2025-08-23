import { useState } from "react";

export default function AccountCreationPage() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call signup API
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] w-full flex items-start md:items-center justify-center pt-10 md:pt-0">
      <div className="w-[92%] max-w-xl border border-gray-300 rounded-b-xl bg-white shadow-sm px-6 md:px-10 py-10">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-wide mb-10 text-[#604D3D]">
          CRÉATION DE COMPTE
        </h2>

        <form onSubmit={submit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Entrer votre nom"
              aria-label="Entrer votre nom"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="h-14 w-full bg-gray-200/70 border border-gray-300 px-4 text-gray-800 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--button-color)]"
            />
            <input
              type="text"
              placeholder="Entrer votre prenom"
              aria-label="Entrer votre prenom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="h-14 w-full bg-gray-200/70 border border-gray-300 px-4 text-gray-800 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--button-color)]"
            />
          </div>

          <input
            type="email"
            placeholder="Entrer votre email"
            aria-label="Entrer votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 w-full bg-gray-200/70 border border-gray-300 px-4 text-gray-800 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--button-color)]"
          />

          <input
            type="password"
            placeholder="Entrer votre mot de passe"
            aria-label="Entrer votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-14 w-full bg-gray-200/70 border border-gray-300 px-4 text-gray-800 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--button-color)]"
          />

          <button
            type="submit"
            className="w-full h-12 bg-[var(--button-color)] text-white font-medium hover:bg-[#a31616] transition-colors"
          >
            S’enregistrer
          </button>
        </form>
      </div>
    </div>
  );
}
