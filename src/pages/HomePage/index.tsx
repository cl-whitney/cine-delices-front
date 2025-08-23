import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';
import { useRecipeStore } from '../../store/RecipeStore';

export default function HomePage() {
  const { recipes, fetchRecipes } = useRecipeStore();

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
    <>
      {/* Section "À la une" sous forme de carrousel */}
      <div className="shadow-xl">
        <Carousel />
      </div>

      {/* Section "Inspirations" */}
      <section className="bg-[#D9D9D9] pt-10 pb-10 flow-root">
        <h2 className="font-bold text-[#604D3D] text-shadow-lg text-6xl text-left w-[80%] mx-auto text-left pl-10">
          Inspirations
        </h2>

        {/* WRAPPER qui centre le contenu */}
        <div className="min-h-[40vh] grid place-items-center px-4 md:px-8">
          {/* Conteneur blanc */}
          <div className="bg-white p-6 shadow-xl w-full md:w-[75%] max-w-5xl mx-auto rounded-t-lg mb-0">
            <div className="grid grid-cols-1 gap-6 justify-items-center md:grid-cols-3 md:gap-18">
              {recipes.map((recipe) => (
                <Card key={recipe.id} recipe={recipe} />
              ))}
            </div>

            <div className="more-inspiration">
              <Link to="/recettes">
                <button
                  className="btn rounded-full text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors mt-8 mx-auto block md:btn-lg"
                  type="button"
                  aria-label="Voir plus d'inspiration"
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  Voir plus d'inspirations
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
