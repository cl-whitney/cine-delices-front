import axios from 'axios';
import { useEffect, useState } from 'react';
import type { IRecipe } from '../../@types/recipe';

export default function Card({ id }: IRecipe) {
  const [recipe, setRecipe] = useState<IRecipe | undefined>(undefined);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/recette/${id}`,
        );
        setRecipe(response.data);
      } catch (_e) {
        console.log(_e);
      }
    }
    fetchRecipe();
  }, [id]);
  return (
    <>
      <article className="card">
        {recipe?.image && (
          <img
            src={recipe.image}
            alt={recipe.title}
            loading="lazy"
            className="w-32 h-32 object-cover" // Réduit la taille de l'image
          />
        )}
        <h3>{recipe?.title}</h3>
      </article>
    </>
  );
}
