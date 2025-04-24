import { Link } from 'react-router-dom';

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
              <button
                type="button"
                className="btn btn-xs bg-[var(--button-color)] hover:bg-[#a31616] transition-colors shadow-xl"
                aria-label="Allez à l'image suivante"
                onClick={() => {
                  window.location.hash = '#item1';
                  window.scrollTo({ top: 0 });
                }}
              />
              <button
                type="button"
                className="btn btn-xs bg-[var(--button-color)] hover:bg-[#a31616] transition-colors shadow-xl"
                aria-label="Allez à l'image suivante"
                onClick={() => {
                  window.location.hash = '#item2';
                  window.scrollTo({ top: 0 });
                }}
              />
              <button
                type="button"
                className="btn btn-xs bg-[var(--button-color)] hover:bg-[#a31616] transition-colors shadow-xl"
                aria-label="Allez à l'image suivante"
                onClick={() => {
                  window.location.hash = '#item3';
                  window.scrollTo({ top: 0 });
                }}
              />
              <button
                type="button"
                className="btn btn-xs bg-[var(--button-color)] hover:bg-[#a31616] transition-colors shadow-xl"
                aria-label="Allez à l'image suivante"
                onClick={() => {
                  window.location.hash = '#item4';
                  window.scrollTo({ top: 0 });
                }}
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
              <Link to="/recette">
                <button
                  type="button"
                  className="btn rounded-full text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors m-10 "
                  aria-label="Voir la recette à la une"
                  onClick={() => {
                    window.scrollTo({ top: 0 });
                  }}
                >
                  Voir plus
                </button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
