export default function Carousel() {
  return (
    // TODO: Faire un vrai carrousel
    <section aria-labelledby="featured-section" className="carousel">
      <h1 id="featured-section" className="section-title">
        À la une
      </h1>
      <div className="carousel-inner">
        <article className="featured-article">
          <figure>
            <img
              src="/images/retour-vers-le-futur.jpg"
              alt="Plat Retour vers le futur"
            />
            <figcaption>Recette inspirée d’un univers futuriste</figcaption>
          </figure>
          <h2>Retour vers le futur</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            euismod, nisl eget consectetur fermentum, nunc urna egestas purus,
            in varius ligula tellus a nunc. <br />
            <br />
            Les ingrédients utilisés dans cette recette proviennent directement
            d’un marché temporel du futur. À tester !
            <br />
            <br />
            <button
              type="button"
              // onClick={() => navigate('/recette/') }
              className="read-more"
              aria-label="Voir la recette à la une"
            >
              Voir plus
            </button>
          </p>
        </article>
      </div>
    </section>
  );
}
