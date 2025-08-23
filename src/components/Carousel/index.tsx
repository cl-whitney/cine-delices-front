import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useRecipeStore } from "../../store/RecipeStore";

type Recipe = {
  id: string | number;
  title: string;
  image: string;
};

const INDICATORS = 3;
const FADE_MS = 1500;

export default function Carousel() {
  const { recipes } = useRecipeStore();
  const [leftImages, setLeftImages] = useState<Recipe[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const fadeTimeoutRef = useRef<number | null>(null);

  const shuffle = (arr: Recipe[]) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const pickRandomImages = () => {
    if (!recipes || recipes.length === 0) return [];
    const mappedRecipes: Recipe[] = recipes.map((r) => ({
      id: r.id,
      title: r.title,
      image: r.image ?? "",
    }));
    const shuffled = shuffle(mappedRecipes);
    return shuffled.slice(0, Math.min(4, shuffled.length));
  };

  const rotateSet = (forceIndex?: number) => {
    const nextImages = pickRandomImages();
    if (nextImages.length === 0) return;
    if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
    const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsFading(true);
    fadeTimeoutRef.current = window.setTimeout(() => {
      setLeftImages(nextImages);
      setIsFading(false);
      if (typeof forceIndex === "number") {
        setActiveIdx(forceIndex % INDICATORS);
      } else {
        setActiveIdx((prev) => (prev + 1) % INDICATORS);
      }
    }, reduce ? 300 : FADE_MS);
  };

  useEffect(() => {
    if (!recipes || recipes.length === 0) return;
    setActiveIdx(0);
    setLeftImages(pickRandomImages());
  }, [recipes]);

  useEffect(() => {
    if (!recipes || recipes.length === 0) return;
    intervalRef.current = window.setInterval(() => {
      rotateSet();
    }, 30000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
    };
  }, [recipes?.length]);

  if (!leftImages || leftImages.length === 0) return null;

  return (
    <section aria-labelledby="carousel-section" className="carousel pt-24 md:pt-10">
      <div>
        <h1
          className="text-white text-9xl font-bold text-left pl-10 pb-0 mb-0 select-none"
          style={{ WebkitTextStroke: "1px #604D3D", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
        >
          À la une
        </h1>

        <article className="pt-0 mt-0 w-[90%] mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-center">
          <div className="flex-1 flex flex-col items-center md:items-start gap-4">
            <div
              className={[
                "aspect-square w-full max-w-[26rem] overflow-hidden rounded-xl md:hidden",
                "transition-all duration-[1500ms] ease-in-out",
                isFading ? "opacity-0 scale-105" : "opacity-100 scale-100",
                "ring-1 ring-black/10 shadow-xl bg-white",
              ].join(" ")}
            >
              <img
                src={leftImages[0]?.image}
                loading="lazy"
                decoding="async"
                alt={leftImages[0]?.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div
              className={[
                "hidden md:grid grid-cols-2 grid-rows-2 aspect-square w-full max-w-[28rem] overflow-hidden rounded-2xl",
                "transition-all duration-[1500ms] ease-in-out",
                isFading ? "opacity-0 scale-105" : "opacity-100 scale-100",
                "ring-1 ring-black/10 shadow-2xl bg-white",
              ].join(" ")}
            >
              {leftImages.map((recipe) => (
                <div key={recipe.id} className="flex items-center justify-center overflow-hidden">
                  <img
                    src={recipe.image}
                    loading="lazy"
                    decoding="async"
                    alt={recipe.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 md:pl-6">
            <div className="font-bold text-left">
              <h2 className="text-2xl font-bold mb-4 text-[var(--button-color)]">
                Retour vers le futur
              </h2>
            </div>
            <div className="featured-article w-[80%] mx-auto max-w-screen-xl flex flex-col md:flex-row">
              <p className="mb-4 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nisl eget
                consectetur fermentum, nunc urna egestas purus, in varius ligula tellus a nunc.
                <br />
                <br />
                Les ingrédients utilisés dans cette recette proviennent directement d’un marché temporel du futur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ut obcaecati, repellendus
                dolorum impedit veritatis totam nostrum perferendis quae odit itaque incidunt accusamus?
                Amet odit laboriosam ipsam, qui ullam quae. À tester !
              </p>
            </div>
            <div className="text-right">
              <Link to="/recette">
                <button
                  type="button"
                  className="btn rounded-full text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors m-10"
                  aria-label="Voir la recette à la une"
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  Voir plus
                </button>
              </Link>
            </div>
          </div>
        </article>

        <div className="flex w-full justify-center gap-3 py-4">
          {Array.from({ length: INDICATORS }, (_, i) => {
            const active = activeIdx === i;
            return (
              <button
                key={i}
                type="button"
                aria-label={`Aller à l'ensemble ${i + 1}`}
                aria-pressed={active}
                aria-current={active ? "true" : undefined}
                onClick={() => rotateSet(i)}
                className={[
                  "relative w-8 h-8 rounded-md outline outline-1 outline-gray-300",
                  "transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-[#604D3D] focus-visible:outline-none",
                  active ? "bg-[#604D3D] text-white shadow-md scale-110" : "bg-[#D9D9D9] hover:bg-[#604D3D]/80",
                ].join(" ")}
              >
                <span
                  className={[
                    "absolute inset-0 rounded-md",
                    active ? "ring-2 ring-[#604D3D]/40" : "",
                  ].join(" ")}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
// commentaire