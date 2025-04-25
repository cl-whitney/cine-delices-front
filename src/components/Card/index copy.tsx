import { useNavigate } from 'react-router-dom';
import type { IRecipeProps } from '../../@types/recipe';

export default function Card({ recipe }: IRecipeProps) {
  const navigate = useNavigate();
  return (
    <>
      <article className="card">
        {recipe?.image && (
          <img
            src={recipe.image}
            alt={recipe.title}
            loading="lazy"
            className="w-32 h-32 object-cover" // Réduit la taille de l'image
            onClick={() => navigate(`/recettes/${recipe.id}`)}
            onKeyDown={() => navigate(`/recettes/${recipe.id}`)}
          />
        )}
        <h3
          onClick={() => navigate(`/recettes/${recipe.id}`)}
          onKeyDown={() => navigate(`/recettes/${recipe.id}`)}
        >
          {recipe?.title}
        </h3>
      </article>
    </>
  );
}
