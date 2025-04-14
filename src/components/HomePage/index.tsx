import Card from '../Card';
import Carousel from '../Carousel';

export default function HomePage() {
  return (
    <main>
      <main>
        {/* Section "À la une" sous forme de carrousel */}
        <Carousel />

        {/* Section "Inspirations" */}
        <section aria-labelledby="inspirations-section">
          <h2 id="inspirations-section" className="section-title">
            Inspirations
          </h2>
          <div className="card-grid">
            <Card />
          </div>
          {/* Bouton "Voir plus d'inspiration" */}
          <div className="more-inspiration">
            <button type="button" aria-label="Voir plus d'inspiration">
              Voir plus d'inspiration
            </button>
          </div>
        </section>
      </main>
    </main>
  );
}
