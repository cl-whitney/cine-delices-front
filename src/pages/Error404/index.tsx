export default function Error404() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[url(./src/assets/background/bg4.jpg)] h-[80rem] w-[75rem] bg-cover text-center">
        <h1
          id="error-heading"
          className="font-bold text-white text-4xl"
          style={{ textShadow: '2px 2px 4px black' }}
        >
          ERREUR 404
        </h1>
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
    </div>
  );
}
