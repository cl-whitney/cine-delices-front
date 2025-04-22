import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Section "À la une" sous forme de carrousel */}
      <Carousel />

      {/* Section "Inspirations" */}
      <div className="bg-gray-200 px-4 md:px-8 pb-12 rounded-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-[var(--button-color)] text-shadow-lg">
          Inspiration
        </h2>

        <div className="bg-white p-6 rounded-lg shadow w-full">
          <section aria-labelledby="inspirations-section">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-8 justify-items-center">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            {/* Bouton "Voir plus d'inspiration" */}
            <div className="more-inspiration">
              <button
                className="btn rounded-full text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors mt-4 mx-auto block"
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
