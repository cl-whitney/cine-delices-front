export default function NotFound() {
  return (
    <div
      aria-labelledby="error-heading"
      className="items-center min-h-screen"
      style={{
        backgroundImage: 'url(./src/assets/background/bg4.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        margin: '-1rem -2rem',
      }}
    >
      <section className="text-center text-white mt-8">
        <h1
          id="error-heading"
          className="font-bold text-white text-4xl"
          style={{ textShadow: '2px 2px 4px black' }}
        >
          Page non trouvée
        </h1>
        <div className="error-content">
          <p
            className="font-bold text-white text-3xl"
            style={{ textShadow: '2px 2px 4px black' }}
          >
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <p
            className="font-bold text-white text-3xl"
            style={{ textShadow: '2px 2px 4px black' }}
          >
            <a href="/" className="error-link">
              Cliquez ici pour retourner à la page d'accueil
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
