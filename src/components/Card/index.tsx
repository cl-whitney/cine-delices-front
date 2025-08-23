// src/components/Card.tsx
import { Link } from "react-router-dom";
import type { IRecipe } from "../../@types/recipe";

type CardProps = {
  recipe: IRecipe;
};

export default function Card({ recipe }: CardProps) {
  return (
    <Link
      to={`/recettes/${recipe.id}`}
      className="card flex flex-col bg-white rounded-lg p-1 hover:cursor-pointer h-full"
    >
      <figure className="w-full aspect-square overflow-hidden rounded-lg">
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center shadow-xl"
        />
      </figure>
      <div className="w-full flex-1">
        <h4 className="text-center">{recipe.title}</h4>
      </div>
      <div className="mt-3 h-px w-full bg-gray-300" />
    </Link>
  );
}
