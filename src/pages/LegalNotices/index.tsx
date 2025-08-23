export default function LegalNotices() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
      <div className="absolute inset-0 bg-gray-100" />

      <div className="relative z-10 w-[92%] max-w-4xl bg-white border border-gray-300 rounded-b-xl shadow-xl px-6 md:px-12 py-12">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-10 text-[#604D3D]">
          Mentions Légales
        </h1>

        <div className="mt-3 h-px w-full bg-gray-300" />

        {/* Sommaire */}
        <nav aria-labelledby="sommaire" className="mb-12">
          <h2 id="sommaire" className="text-xl font-bold mb-4 text-[#604D3D]">
            Sommaire
          </h2>
          <ul className="space-y-2 text-[var(--button-color)] font-medium">
            <li>
              <a href="#editeur">1. Éditeur du site</a>
            </li>
            <li>
              <a href="#hebergeur">2. Hébergeur</a>
            </li>
            <li>
              <a href="#propriete">3. Propriété intellectuelle</a>
            </li>
            <li>
              <a href="#donnees">4. Données personnelles</a>
            </li>
            <li>
              <a href="#cookies">5. Cookies</a>
            </li>
            <li>
              <a href="#droit">6. Droit applicable</a>
            </li>
          </ul>
        </nav>

        {/* Sections */}
        <section id="editeur" className="mb-10">
          <h2 className="text-xl font-bold mb-2 text-[#604D3D]">
            1. Éditeur du site
          </h2>
          <p className="text-black leading-relaxed">
            Le site <strong>CinéDélices</strong> est édité par la société{" "}
            <strong>CinéDélices SAS</strong>, société par actions simplifiée au
            capital de 20 000 €, immatriculée au RCS de Paris sous le numéro{" "}
            <strong>123 456 789</strong>, dont le siège social est situé :
            <br />
            42 rue du Cinéma, 75000 Paris, France.
            <br />
            <a
              href="mailto:contact@cinedelices.fr"
              className="text-[var(--button-color)] underline"
            >
              Email : contact@cinedelices.fr
            </a>
            <br />
            <a
              href="tel:+3378253695"
              className="text-[var(--button-color)] underline"
            >
              Téléphone : 00 78 25 36 95
            </a>
          </p>
        </section>

        <section id="hebergeur" className="mb-10">
          <h2 className="text-xl font-bold mb-2 text-[#604D3D]">2. Hébergeur</h2>
          <p className="text-black leading-relaxed">
            Le site est hébergé par{" "}
            <strong>OVHASH - Hébergement & Cloud</strong>, société située au :{" "}
            <br />
            10 Rue des Serveurs, 87000 Limoges, France.
            <br />
            Téléphone : 00 10 08 19 88
          </p>
        </section>

        <section id="propriete" className="mb-10">
          <h2 className="text-xl font-bold mb-2 text-[#604D3D]">
            3. Propriété intellectuelle
          </h2>
          <p className="text-black leading-relaxed">
            L’ensemble du contenu présent sur le site CinéDélices, incluant mais
            sans s’y limiter : les textes, images, graphismes, logos, vidéos,
            recettes et bases de données, est protégé par le droit d’auteur et
            reste la propriété exclusive de CinéDélices ou de ses partenaires.
            <br />
            Toute reproduction, représentation, modification, publication ou
            adaptation, totale ou partielle, est strictement interdite sans
            autorisation écrite préalable.
          </p>
        </section>

        <section id="donnees" className="mb-10">
          <h2 className="text-xl font-bold mb-2 text-[#604D3D]">
            4. Données personnelles
          </h2>
          <p className="text-black leading-relaxed">
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), CinéDélices s’engage à assurer la sécurité et la
            confidentialité des données personnelles collectées via ses
            formulaires de contact et d’inscription. <br />
            Les données collectées sont utilisées exclusivement pour répondre à
            vos demandes, gérer vos comptes et améliorer nos services. Vous
            disposez d’un droit d’accès, de rectification et de suppression de
            vos données en nous contactant à l’adresse suivante :{" "}
            <a
              href="mailto:contact@cinedelices.fr"
              className="text-[var(--button-color)] underline"
            >
              contact@cinedelices.fr
            </a>
            .
          </p>
        </section>

        <section id="cookies" className="mb-10">
          <h2 className="text-xl font-bold mb-2 text-[#604D3D]">5. Cookies</h2>
          <p className="text-black leading-relaxed">
            Le site CinéDélices utilise des cookies afin d’améliorer l’expérience
            utilisateur, mesurer l’audience et proposer des contenus adaptés à
            vos préférences. <br />
            Vous pouvez à tout moment désactiver ou configurer vos préférences
            de cookies dans les paramètres de votre navigateur.
          </p>
        </section>

        <section id="droit" className="mb-10">
          <h2 className="text-xl font-bold mb-2 text-[#604D3D]">
            6. Droit applicable
          </h2>
          <p className="text-black leading-relaxed">
            Les présentes mentions légales sont régies par le droit français. En
            cas de litige, compétence exclusive est attribuée aux tribunaux
            compétents de Paris.
          </p>
        </section>
      </div>
    </div>
  );
}
