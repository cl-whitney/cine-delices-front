export default function About() {
  return (
    <main className="bg-gray-100 py-12">
      <section
        id="about"
        aria-label="Section À propos de CinéDélices"
        className="w-[92%] max-w-4xl mx-auto bg-white border border-gray-300 rounded-b-xl shadow-md px-6 md:px-12 py-10"
      >
        <header className="mb-6 md:mb-8">
          <h1 className="text-center text-3xl md:text-4xl font-extrabold text-[#604D3D]">
            À propos de nous
          </h1>
          <div className="mt-3 h-px w-full bg-gray-300" />
        </header>

        <div className="space-y-8 text-black leading-relaxed">
          <section>
            <p>
              <strong className="font-bold">CinéDélices</strong> est un site qui fusionne deux passions : le cinéma et la
              gastronomie. Recrée les plats emblématiques de tes films et séries préférés, découvre des recettes
              inspirées d’œuvres cultes et plonge dans l’univers culinaire de la pop culture.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#604D3D] mb-2">Notre histoire</h2>
            <p>
              Né de l’envie d’une équipe de passionnés de cuisine et de culture pop de partager leurs découvertes,
              CinéDélices est devenu un espace où cinéphiles et gourmands se rencontrent pour cuisiner, apprendre et
              s’inspirer ensemble.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#604D3D] mb-2">Notre mission</h2>
            <p>
              Offrir une plateforme conviviale et interactive où chacun peut explorer, publier et partager des recettes
              inspirées de films et séries, avec une expérience simple, immersive et pensée pour la communauté.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#604D3D] mb-2">Nos valeurs</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Créativité culinaire et hommage aux œuvres</li>
              <li>Partage, bienveillance et accessibilité</li>
              <li>Crédits et respect de la propriété intellectuelle</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
