export default function Card() {
  return (
    <div
      className="card flex bg-white flex-col items-center rounded-lg  border-1 shadow-xl p-1 hover:cursor-pointer"
      onClick={() => (window.location.href = '/recette')}
    >
      <figure>
        <img
          src="./src/assets/recipe.jpg"
          alt="Salade périfée de Frodon"
          loading="lazy"
          className="rounded-lg "
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">La salade périfée de Frodon</h3>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
      </div>
    </div>
  );
}
