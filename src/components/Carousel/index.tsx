export default function Carousel() {
  return (
    <section aria-labelledby="featured-section" className="carousel">
      <div className="carousel-inner">
        <article className="featured-article flex flex-col md:flex-row items-start gap-4">
          <div className="flex-1">
            <h1 className="text-lg font-semibold mb-2">À la une </h1>
            <figure className="mb-4">
              <img
                src="./src/assets/recipe.jpg"
                alt="Plat Retour vers le futur"
                loading="lazy"
                className="rounded-lg"
              />
            </figure>
          </div>
          <div className="flex-1 pt-0 md:pt-21">
            <h2 className="text-2xl font-bold mb-4">Retour vers le futur</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              euismod, nisl eget consectetur fermentum, nunc urna egestas purus,
              in varius ligula tellus a nunc. <br />
              <br />
              Les ingrédients utilisés dans cette recette proviennent
              directement d’un marché temporel du futur. À tester !
            </p>
            <div className="text-right">
              <button
                type="button"
                className="btn btn-sm rounded-full text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors"
                aria-label="Voir la recette à la une"
              >
                Voir plus
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
