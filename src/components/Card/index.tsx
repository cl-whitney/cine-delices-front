import { Link } from 'react-router-dom';

export default function Card() {
  return (
    <Link
      to="/recette"
      className="card flex bg-white flex-col items-center rounded-lg border border-gray-300 shadow-xl p-1 hover:cursor-pointer"
    >
      <figure>
        <img
          src="./src/assets/recipe.jpg"
          alt="Salade périfée de Frodon"
          loading="lazy"
          className="rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">La salade périfée de Frodon</h3>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
      </div>
    </Link>
  );
}
