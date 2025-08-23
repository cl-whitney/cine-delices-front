import {
  faClock,
  faEuroSign,
  faFireBurner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IRecipe } from "../../@types/recipe";
import api from "../../api";

export default function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<IRecipe | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { data } = await api.get(`/recettes/${id}`);
        if (mounted) setRecipe(data);
      } catch {}
    })();
    return () => {
      mounted = false;
    };
  }, [id]);

  if (!recipe) {
    return (
      <div className="w-[92%] max-w-6xl mx-auto py-10">
        <div className="animate-pulse space-y-6">
          <div className="h-60 md:h-72 bg-gray-200 rounded-xl" />
          <div className="h-24 bg-gray-200 rounded-xl" />
          <div className="h-80 bg-gray-200 rounded-xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-[92%] max-w-6xl mx-auto py-6 md:py-10 space-y-8 md:space-y-10">
      <section className="rounded-xl bg-white ring-1 ring-black/10 shadow-xl p-4 md:p-8">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-10 items-start">
          <div>
            <h1 className="text-2xl md:text-4xl font-extrabold leading-tight text-[#604D3D] mb-4">
              {recipe.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-500 text-white">
                Plat
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-sky-500 text-white">
                Film
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-500 text-white">
                Genre
              </span>
            </div>

            <p className="text-black/80 leading-relaxed mb-4 md:mb-6">
              {recipe.description}
            </p>

            <button
              type="button"
              className="inline-flex items-center px-5 h-11 rounded-full bg-[var(--button-color)] text-white font-medium hover:bg-[#a31616] transition-colors"
            >
              Voir plus
            </button>
          </div>

          <div className="rounded-xl overflow-hidden ring-1 ring-black/10 shadow-2xl bg-white">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="rounded-xl bg-white ring-1 ring-black/10 shadow-xl px-4 md:px-8 py-5 md:py-6">
        <div className="grid grid-cols-3 divide-x divide-gray-200 text-center">
          <div className="px-2 md:px-4">
            <span className="inline-flex items-center gap-2 text-black font-semibold">
              <FontAwesomeIcon
                icon={faClock}
                size="lg"
                style={{ color: "var(--button-color)" }}
              />
              {recipe.duration}
            </span>
          </div>
          <div className="px-2 md:px-4">
            <span className="inline-flex items-center gap-2 text-black font-semibold">
              <FontAwesomeIcon
                icon={faFireBurner}
                size="lg"
                style={{ color: "var(--button-color)" }}
              />
              {recipe.difficulty}
            </span>
          </div>
          <div className="px-2 md:px-4">
            <span className="inline-flex items-center gap-2 text-black font-semibold">
              <FontAwesomeIcon
                icon={faEuroSign}
                size="lg"
                style={{ color: "var(--button-color)" }}
              />
              {recipe.cost}
            </span>
          </div>
        </div>
      </section>

      <section className="rounded-xl bg-white ring-1 ring-black/10 shadow-xl p-4 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#604D3D]">
            Ingrédients
          </h2>
        </div>

        <div className="flex items-center justify-start gap-3 mb-6">
          <button
            type="button"
            className="h-10 w-10 rounded-lg bg-gray-100 hover:bg-[var(--button-color)] hover:text-white border border-gray-300 transition-colors"
          >
            −
          </button>
          <span className="h-10 inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 md:px-8 text-sm md:text-base">
            4 personnes
          </span>
          <button
            type="button"
            className="h-10 w-10 rounded-lg bg-gray-100 hover:bg-[var(--button-color)] hover:text-white border border-gray-300 transition-colors"
          >
            +
          </button>
        </div>

        <ul className="text-black/90 leading-relaxed grid gap-y-2 pl-5 list-disc md:grid-cols-2 lg:grid-cols-3">
          <li>1 belle entrecôte de bœuf</li>
          <li>2 gousses d’ail</li>
          <li>1 échalote</li>
          <li>2 cuillères à soupe d’huile d’olive</li>
          <li>1 cuillère à soupe de beurre</li>
          <li>1 branche de thym</li>
          <li>1 branche de romarin</li>
          <li>1 cuillère à café de poivre concassé</li>
          <li>1 cuillère à café de sel</li>
          <li>1 cuillère à soupe de vinaigre balsamique (optionnel)</li>
          <li>100 g de champignons de Paris (optionnel)</li>
        </ul>
      </section>

      <section className="rounded-xl bg-white ring-1 ring-black/10 shadow-xl p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#604D3D] mb-6">
          Préparation
        </h2>

        <div className="space-y-8">
          <div className="relative">
            <div className="flex items-start gap-3">
              <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-white font-bold">
                1
              </span>
              <p className="text-black leading-relaxed">
                {`Pour un gâteau à l’orange, mélangez tous les ingrédients dans un saladier, puis versez le mélange dans un plat à cake et faites cuire au four à 180°C pendant 30 minutes.`}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-start gap-3">
              <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-white font-bold">
                2
              </span>
              <p className="text-black leading-relaxed">
                {`Pour un cheesecake sans cuisson, préparez une base en mixant des biscuits cassés avec du beurre fondu et du sucre glace. Mélangez ensuite du fromage frais avec du sucre et de la chantilly, puis versez cette préparation dans des verrines avant d’ajouter des fruits rouges et un peu de sucre glace.`}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-start gap-3">
              <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-white font-bold">
                3
              </span>
              <p className="text-black leading-relaxed">
                {`Pour des champignons farcis, commencez par faire revenir les pieds des champignons avec de l’ail et du persil. Ajoutez ensuite de la crème et du fromage râpé pour obtenir une farce, puis garnissez les champignons et enfournez à 180°C pendant 25 minutes.`}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-start gap-3">
              <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-white font-bold">
                4
              </span>
              <p className="text-black leading-relaxed">
                {`Mélangez les sauces, la farine et le levain dans un saladier, puis ajoutez le beurre et l’œuf avant d’incorporer les morceaux de chocolat. Formez un boudin de pâte, découpez des tranches et disposez-les sur une plaque de cuisson.`}
              </p>
            </div>
          </div>
        </div>

        {recipe.instruction && (
          <div className="mt-8">
            <p className="text-black/80 leading-relaxed">{recipe.instruction}</p>
          </div>
        )}
      </section>
    </div>
  );
}
