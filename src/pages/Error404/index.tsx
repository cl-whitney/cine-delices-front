export default function NotFound() {
  return (
    <div
      aria-labelledby="error-heading"
      className="bg-[url(./src/assets/background/bg4.jpg)] bg-cover bg-top min-h-screen flex flex-col -mt-[1.4rem] -mx-[1.5rem] -mb-[8rem]"
    >
      <section className="text-center text-white mt-20">
        <h1
          id="error-heading"
          className="font-bold text-white text-4xl"
          style={{ textShadow: '2px 2px 4px black' }}
        >
          ERREUR 404
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
