import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';
import { useRecipeStore } from '../../store/RecipeStore';

export default function HomePage() {
  const _navigate = useNavigate();

  const { recipes, fetchRecipes } = useRecipeStore();

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
    <>
      {/* Section "À la une" sous forme de carrousel */}
      <div className="shadow-xl rounded-lg">
        <Carousel />
      </div>

      {/* Section "Inspirations" */}

      <div className=" flex items-center flex-col px-4 md:px-8 pb-12 rounded-lg ">
        <h2 className=" H2-HomePage font-bold text-[var(--button-color)] text-shadow-lg">
          Inspiration
        </h2>
        <div className="bg-gray-200 p-6 rounded-lg shadow-xl  md:w-[75%]">
          <div className="grid grid-cols-1 gap-6 justify-items-center md:grid-cols-3 md:gap-18">
            {recipes.map((recipe) => (
              <Card key={recipe.id} recipe={recipe} />
            ))}
          </div>
          {/* Bouton "Voir plus d'inspiration" */}
          <div className="more-inspiration">
            <Link to="/recettes">
              <button
                className="btn rounded-full text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors mt-8 mx-auto block md:btn-lg"
                type="button"
                aria-label="Voir plus d'inspiration"
                // ? onClick={() => navigate('/recettes')} Que fait la ligne du dessous @Sam ?
                onClick={() => {
                  window.scrollTo({ top: 0 });
                }}
              >
                Voir plus d'inspiration
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
