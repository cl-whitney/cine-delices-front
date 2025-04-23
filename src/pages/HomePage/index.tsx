import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Section "À la une" sous forme de carrousel */}
      <div className="shadow-xl rounded-lg p-6">
        <Carousel />
      </div>

      {/* Section "Inspirations" */}
      <div className="px-4 md:px-8 pb-12 rounded-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-[var(--button-color)] text-shadow-lg">
          Inspiration
        </h2>

        <div className="bg-gray-200 p-6 rounded-lg shadow-xl">
          <section aria-labelledby="inspirations-section">
            <div className="grid grid-cols-1 gap-6 justify-items-center md:grid-cols-3">
              {Array.from({ length: 12 }).map((_, index) => (
                <Card key={index} />
              ))}
            </div>
            {/* Bouton "Voir plus d'inspiration" */}
            <div className="more-inspiration">
              <button
                className="btn  rounded-full text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors mt-8 mx-auto block md:btn-lg"
                type="button"
                aria-label="Voir plus d'inspiration"
                onClick={() => navigate('/recettes')}
              >
                Voir plus d'inspiration
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
