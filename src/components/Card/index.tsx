export default function Card() {
  return (
    <>
      <article className="card flex flex-col items-center rounded-lg p-4">
        <img
          src="./src/assets/recipe.jpg"
          alt="Salade périfée de Frodon"
          loading="lazy"
          className="w-64 h-52 object-cover rounded-lg mb-4 shadow-lg"
        />
        <h3 className="text-center">La salade périfée de Frodon</h3>
        {/* Ajouter un lien vers la page recette correspondante */}
        {/* <Link
          href="#"
          aria-label="Voir la recette : La salade périfée de Frodon"
        /> */}
      </article>
    </>
  );
}
