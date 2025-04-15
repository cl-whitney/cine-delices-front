export default function LegalNotices() {
  return (
    <main
      aria-label="Mentions légales de CinéDélices"
      className="legal-container"
    >
      {/* Sommaire */}
      <nav aria-labelledby="sommaire">
        <h2 id="sommaire" className="legal-heading">
          Sommaire
        </h2>
        <ul>
          <li>
            <a href="#editeur" aria-label="Aller à la section Éditeur du site">
              1. Éditeur du site
            </a>
          </li>
          <li>
            <a href="#hebergeur" aria-label="Aller à la section Hébergeur">
              2. Hébergeur
            </a>
          </li>
          <li>
            <a
              href="#propriete"
              aria-label="Aller à la section Propriété intellectuelle"
            >
              3. Propriété intellectuelle
            </a>
          </li>
          <li>
            <a
              href="#donnees"
              aria-label="Aller à la section Données personnelles"
            >
              4. Données personnelles
            </a>
          </li>
          <li>
            <a href="#cookies" aria-label="Aller à la section Cookies">
              5. Cookies
            </a>
          </li>
          <li>
            <a href="#droit" aria-label="Aller à la section Droit applicable">
              6. Droit applicable
            </a>
          </li>
        </ul>
      </nav>

      {/* Contenu des mentions légales */}
      <h1 className="legal-title">Mentions Légales – CinéDélices</h1>

      <section id="editeur" className="legal-section">
        <h2 className="legal-heading">1. Éditeur du site</h2>
        <p>
          Le site CinéDélices est édité par :<br />
          <strong>CinéDélices SAS</strong>
          <br />
          Adresse : 42 rue du Cinéma, 75000 Paris, France
          <br />
          Email :{' '}
          <a href="mailto:contact@CinéDélies.fr">contact@cinedelices.fr</a>
          <br />
          Téléphone :{' '}
          <a
            href="tel:+3378253695"
            aria-label="Appeler CinéDélices au 00 78 25 36 95"
          >
            00 78 25 36 95
          </a>
          <br />
          Directeur de la publication : Jean-Michel APEUPRE
        </p>
      </section>

      <section id="hebergeur" className="legal-section">
        <h2 className="legal-heading">2. Hébergeur</h2>
        <p>
          Le site est hébergé par :<br />
          <strong>OVHASH</strong>
          <br />
          10 Rue des serveurs prend feu, 87000 TresLoin, France
          <br />
          Téléphone : 00 10 08 19 88
        </p>
      </section>

      <section id="propriete" className="legal-section">
        <h2 className="legal-heading">3. Propriété intellectuelle</h2>
        <p>
          Tous les contenus présents sur le site CinéDélices (textes, images,
          recettes, vidéos, logos...) sont la propriété exclusive de CinéDélices
          ou de leurs auteurs respectifs. Toute reproduction, représentation ou
          diffusion sans autorisation est interdite.
        </p>
      </section>

      <section id="donnees" className="legal-section">
        <h2 className="legal-heading">4. Données personnelles</h2>
        <p>
          Aucune donnée personnelle n'est traitée de manière automatique.
          Toutefois, des données telles que le nom, prénom, et email peuvent
          être collectées via le formulaire de contact.
        </p>
      </section>

      <section id="cookies" className="legal-section">
        <h2 className="legal-heading">5. Cookies</h2>
        <p>
          Ce site utilise des cookies pour améliorer l'expérience utilisateur.
          Vous pouvez gérer vos préférences de cookies en ajustant les
          paramètres de votre navigateur.
        </p>
      </section>

      <section id="droit" className="legal-section">
        <h2 className="legal-heading">6. Droit applicable</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français. En
          cas de litige, seuls les tribunaux français sont compétents.
        </p>
      </section>
    </main>
  );
}
