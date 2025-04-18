import './style.css';

export default function NotFound() {
  return (
    <main aria-labelledby="error-heading" className="error-container">
      <section className="error-section">
        <header>
          <h1 id="error-heading" className="error-title">
            Page non trouvée
          </h1>
        </header>

        <div className="error-content">
          <p>
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <p>
            <a href="/" className="error-link">
              Retourner à la page d'accueil
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
