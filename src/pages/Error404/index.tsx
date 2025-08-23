export default function Error404() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Flou autour du contenu */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_10%,_rgba(0,0,0,0.9)0%)] backdrop-blur-3xl" />

      <div
        className="relative z-10 w-[75rem] h-[80rem] bg-cover bg-top bg-no-repeat text-center flex flex-col items-center px-4"
        style={{ backgroundImage: "url('./src/assets/background/bg4.jpg')" }}
      >
        <h1
          id="error-heading"
          className="font-bold text-white text-5xl mb-6"
          style={{ textShadow: '2px 2px 4px black' }}
        >
          ERREUR 404
        </h1>
        <p
          className="font-bold text-white text-2xl mb-4"
          style={{ textShadow: '2px 2px 4px black' }}
        >
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <a
          href="/"
          className="btn border-neutral rounded-full text-white bg-[var(--button-color)] hover:bg-[#a31616] transition-colors text-shadow-lg shadow-xl"
          aria-label="Retour à la page d'accueil"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
}
