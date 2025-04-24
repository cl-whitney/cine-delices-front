import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';
import { useRecipeStore } from '../../store/RecipeStore';

export default function HomePage() {
  const navigate = useNavigate();

  const { recipes, fetchRecipes } = useRecipeStore();

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
    <>
      {/* Section "À la une" sous forme de carrousel */}
      <Carousel />

      {/* Section "Inspirations" */}
      <section aria-labelledby="inspirations-section">
        <h2 id="inspirations-section" className="section-title">
          Inspirations
        </h2>
        <div className="card-grid">
          {recipes.map((recipe) => (
            <Card key={recipe.id} recipe={recipe} />
          ))}
        </div>
        {/* Bouton "Voir plus d'inspiration" */}
        <div className="more-inspiration">
          <button
            className="btn btn-sm rounded-full text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors"
            type="button"
            aria-label="Voir plus d'inspiration"
            onClick={() => navigate('/recettes')}
          >
            Voir plus d'inspiration
          </button>
        </div>
      </section>
    </>
  );
}
