export default function Carousel() {
  return (
    <section aria-labelledby="carousel-section" className="carousel">
      <div className="carousel-inner">
        <article className="featured-article flex flex-col md:flex-row items-start gap-4">
          <div className="flex-1">
            <h1 className="mb-2 text-[var(--button-color)] text-shadow-lg">
              À la une{' '}
            </h1>
            <div className="carousel w-full">
              <div id="item1" className="carousel-item w-full">
                <img
                  src="./src/assets/recipe.jpg"
                  className="w-full shadow-xl rounded-lg "
                  loading="lazy"
                  alt="Plat Retour vers le futur"
                  aria-labelledby="Carousel section"
                />
              </div>
              <div id="item2" className="carousel-item w-full">
                <img
                  src="./src/assets/recipe.jpg"
                  className="w-full shadow-xl rounded-lg"
                  loading="lazy"
                  alt="Plat Retour vers le futur"
                  aria-labelledby="Carousel section"
                />
              </div>
              <div id="item3" className="carousel-item w-full">
                <img
                  src="./src/assets/recipe.jpg"
                  className="w-full shadow-xl rounded-lg"
                  loading="lazy"
                  alt="Plat Retour vers le futur"
                  aria-labelledby="Carousel section"
                />
              </div>
              <div id="item4" className="carousel-item w-full">
                <img
                  src="./src/assets/recipe.jpg"
                  className="w-full shadow-xl rounded-lg"
                  loading="lazy"
                  alt="Plat Retour vers le futur"
                  aria-labelledby="Carousel section"
                />
              </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2 ">
              {/* biome-ignore lint/a11y/useAnchorContent: <explanation> */}
              <a
                href="#item1"
                className="btn btn-xs bg-[var(--button-color)] hover:bg-[#a31616] transition-colors shadow-xl"
                aria-label="Allez a l'image suivante"
              />
              {/* biome-ignore lint/a11y/useAnchorContent: <explanation> */}
              <a
                href="#item2"
                className="btn btn-xs bg-[var(--button-color)] hover:bg-[#a31616] transition-colors shadow-xl"
                ria-label="Allez a l'image suivante"
              />
              {/* biome-ignore lint/a11y/useAnchorContent: <explanation> */}
              <a
                href="#item3"
                className="btn btn-xs bg-[var(--button-color)] hover:bg-[#a31616] transition-colors shadow-xl"
                ria-label="Allez a l'image suivante"
              />
              {/* biome-ignore lint/a11y/useAnchorContent: <explanation> */}
              <a
                href="#item4"
                className="btn btn-xs bg-[var(--button-color)] hover:bg-[#a31616] transition-colors shadow-xl"
                ria-label="Allez a l'image suivante"
              />
            </div>
          </div>
          <div className="flex-1 pt-0 md:pt-21">
            <h2 className="text-2xl font-bold mb-4 text-[var(--button-color)] text-shadow-lg">
              Retour vers le futur
            </h2>
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
                className="btn rounded-full text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors md:m-10 "
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
