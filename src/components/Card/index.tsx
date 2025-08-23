import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import type { IRecipeProps } from '../../@types/recipe';

export default function Card({ recipe }: IRecipeProps) {
  // const _navigate = useNavigate();
  return (
    <Link
      to={`/recettes/${recipe.id}`}
      className="card flex bg-white flex-col items-center rounded-lg border border-gray-300 shadow-xl p-1 hover:cursor-pointer"
    >
      <figure>
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          className="rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{recipe.title}</h3>
        <p>{recipe.description}</p>
      </div>
    </Link>
  );
}
