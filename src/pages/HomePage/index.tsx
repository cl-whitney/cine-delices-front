import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';

export default function HomePage() {
  return (
    <>
      {/* Section "À la une" sous forme de carrousel */}
      <div className="shadow-xl rounded-lg">
        <Carousel />
      </div>

      {/* Section "Inspirations" */}
      <div className="px-4 md:px-8 pb-12 rounded-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-[var(--button-color)] text-shadow-lg">
          Inspiration
        </h2>

        <div className="bg-gray-200 p-6 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 gap-6 justify-items-center md:grid-cols-3 md:gap-18">
            {Array.from({ length: 12 }).map((_, index) => (
              <Card key={index} />
            ))}
          </div>
          {/* Bouton "Voir plus d'inspiration" */}
          <div className="more-inspiration">
            <Link to="/recettes">
              <button
                className="btn  rounded-full text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors mt-8 mx-auto block md:btn-lg"
                type="button"
                aria-label="Voir plus d'inspiration"
                onClick={() => {
                  window.scrollTo({ top: 0 });
                }}
              >
                Voir plus d'inspiration
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
