export default function Error404() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/70" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('./src/assets/background/bg4.jpg')" }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <h1
          className="text-9xl font-extrabold text-white drop-shadow-lg mb-6"
          style={{ textShadow: "2px 2px 6px black" }}
        >
          404
        </h1>
        <p
          className="text-2xl md:text-3xl font-semibold text-white mb-4"
          style={{ textShadow: "1px 1px 4px black" }}
        >
          Oups... Cette page n'existe pas
        </p>
        <p
          className="text-lg text-gray-200 mb-8 max-w-xl"
          style={{ textShadow: "1px 1px 3px black" }}
        >
          Il semble que vous soyez perdu. La page que vous cherchez a peut-être
          été supprimée ou déplacée.
        </p>

        <a
          href="/"
          className="px-8 py-3 rounded-full bg-[var(--button-color)] text-white font-medium hover:bg-[#a31616] transition-colors shadow-lg"
          aria-label="Retour à la page d'accueil"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
}
