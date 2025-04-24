import type { IRecipeProps } from '../../@types/recipe';

export default function Card({ recipe }: IRecipeProps) {
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
