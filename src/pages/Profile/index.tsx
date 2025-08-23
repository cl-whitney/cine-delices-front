import { useEffect } from "react";
import { faUser, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useUserStore } from "../../store/UserStore";
import { getUserIdFromToken } from "../../utils/jwt";

export default function UserPage() {
  const { currentUser, fetchUserById } = useUserStore();

  useEffect(() => {
    if (!currentUser) {
      const token = localStorage.getItem("token");
      const id = getUserIdFromToken(token);
      if (id != null) fetchUserById(id);
    }
  }, [currentUser, fetchUserById]);

  const fullName =
    currentUser
      ? `${currentUser.first_name ?? ""} ${currentUser.last_name ?? ""}`.trim() || "Utilisateur"
      : "Utilisateur";

  const v = (s?: string) => (s && s.length > 0 ? s : "—");

  return (
    <main className="bg-gray-100 py-10">
      <section className="w-[92%] max-w-5xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-gray-300 grid place-items-center">
            <FontAwesomeIcon icon={faUser} className="h-9 w-9 text-white/80" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#333]">{fullName}</h1>
        </div>

        <div className="border border-gray-300 bg-gray-200 rounded-md">
          <div className="bg-gray-300/80 px-5 py-3 rounded-t-md">
            <h2 className="text-lg md:text-xl font-extrabold text-[#333]">Informations personnelles</h2>
          </div>
          <div className="px-5 py-5 md:py-6">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-300 rounded-md px-4 py-3">
                <dt className="text-xs uppercase tracking-wide text-[#666]">Prénom</dt>
                <dd className="text-lg font-semibold text-[#333]">{v(currentUser?.first_name)}</dd>
              </div>
              <div className="bg-white border border-gray-300 rounded-md px-4 py-3">
                <dt className="text-xs uppercase tracking-wide text-[#666]">Nom</dt>
                <dd className="text-lg font-semibold text-[#333]">{v(currentUser?.last_name)}</dd>
              </div>
              <div className="bg-white border border-gray-300 rounded-md px-4 py-3 md:col-span-2">
                <dt className="text-xs uppercase tracking-wide text-[#666]">Email</dt>
                <dd className="text-lg font-semibold text-[#333]">{v(currentUser?.email)}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="border border-gray-300 bg-gray-200 rounded-md">
          <div className="bg-gray-300/80 px-5 py-3 rounded-t-md flex items-center gap-2">
            <FontAwesomeIcon icon={faUtensils} className="text-[#333]" />
            <h2 className="text-lg md:text-xl font-extrabold text-[#333]">Mes recettes</h2>
          </div>
          <div className="px-5 pt-4 pb-6">
            <p className="text-sm text-[#555] italic">Aucune recette publiée pour le moment.</p>
          </div>
        </div>

        <div className="space-y-4">
          <Link to="/ajout-recette" className="block">
            <button className="w-full bg-gray-200 border border-gray-300 text-[#333] font-semibold rounded-md px-4 py-3 hover:bg-[var(--button-color)] hover:text-white transition">
              Ajouter une recette
            </button>
          </Link>
          <button className="w-full bg-gray-200 border border-gray-300 text-[#333] font-semibold rounded-md px-4 py-3 hover:bg-[var(--button-color)] hover:text-white transition">
            Supprimer mon compte
          </button>
        </div>
      </section>
    </main>
  );
}
