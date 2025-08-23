export default function Cgu() {
  return (
    <main className="bg-gray-100 py-12">
      <section
        aria-label="Conditions Générales d’Utilisation de CinéDélices"
        className="w-[92%] max-w-4xl mx-auto bg-white border border-gray-300 rounded-b-xl shadow-md px-6 md:px-12 py-10"
      >
        <header className="mb-6 md:mb-8">
          <h1 className="text-center text-3xl md:text-4xl font-extrabold text-[#604D3D]">
            Conditions Générales d’Utilisation
          </h1>
          <div className="mt-3 h-px w-full bg-gray-300" />
        </header>

        <div className="space-y-8 text-black leading-relaxed">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#604D3D] mb-2">Sommaire</h2>
            <ul className="space-y-2 text-[var(--button-color)] font-medium">
              <li><a href="#presentation">1. Présentation du site</a></li>
              <li><a href="#acceptation">2. Acceptation des CGU</a></li>
              <li><a href="#acces">3. Accès au site</a></li>
              <li><a href="#propriete">4. Propriété intellectuelle</a></li>
              <li><a href="#contributions">5. Contributions des utilisateurs</a></li>
              <li><a href="#responsabilites">6. Responsabilités</a></li>
              <li><a href="#donnees">7. Données personnelles</a></li>
              <li><a href="#modifications">8. Modifications</a></li>
              <li><a href="#droit">9. Droit applicable</a></li>
            </ul>
          </section>

          <section id="presentation">
            <h2 className="text-xl md:text-2xl font-bold text-[#604D3D] mb-2">1. Présentation du site</h2>
            <p>
              CinéDélices est une plateforme de recettes inspirées d’univers cinématographiques et télévisuels.
              Les contenus visent à divertir, inspirer et permettre de recréer chez soi des plats emblématiques.
            </p>
          </section>

          <section id="acceptation">
            <h2 className="text-xl md:text-2xl font-bold text-[#604D3D] mb-2">2. Acceptation des CGU</h2>
            <p>
              L’accès et l’utilisation du site impliquent l’acceptation sans réserve des présentes CGU. En
              naviguant sur CinéDélices, vous reconnaissez en avoir pris connaissance et les accepter.
            </p>
          </section>

          <section id="acces">
            <h2 className="text-xl md:text-2xl font-bold text-[#604D3D] mb-2">3. Accès au site</h2>
            <p>
              Le site est accessible gratuitement à toute personne disposant d’un accès Internet. CinéDélices peut
              interrompre l’accès pour maintenance ou raisons techniques sans préavis.
            </p>
          </section>

          <section id="propriete">
            <h2 className="text-xl md:text-2xl font-bold text-[#604D3D] mb-2">4. Propriété intellectuelle</h2>
            <p>
              Textes, recettes, photos, vidéos, logos et éléments graphiques sont protégés par le droit de la
              propriété intellectuelle. Toute reproduction, diffusion ou adaptation, totale ou partielle, est
              interdite sans autorisation préalable.
            </p>
            <p>
              Les références aux œuvres audiovisuelles sont effectuées à des fins d’inspiration et ne constituent
              pas une affiliation officielle avec les ayants droit.
            </p>
          </section>

          <section id="contributions">
            <h2 className="text-xl md:text-2xl font-bold text-[#604D3D] mb-2">5. Contributions des utilisateurs</h2>
            <p>
              En soumettant du contenu (recette, commentaire, photo), vous garantissez disposer des droits
              nécessaires et autorisez sa publication. CinéDélices se réserve le droit de modérer ou de supprimer
              tout contenu non conforme.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Propos diffamatoires, injurieux, discriminatoires ou haineux</li>
              <li>Contenus illicites, pornographiques, violents ou choquants</li>
              <li>Publicité non sollicitée ou liens commerciaux non autorisés</li>
            </ul>
          </section>

          <section id="responsabilites">
            <h2 className="text-xl md:text-2xl font-bold text-[#604D3D] mb-2">6. Responsabilités</h2>
            <p>
              CinéDélices s’efforce d’assurer des informations exactes mais ne peut garantir l’absence d’erreurs.
              L’utilisateur demeure responsable de l’usage des recettes et informations (allergènes, matériel,
              cuisson, etc.). CinéDélices ne saurait être tenu responsable des dommages résultant d’une utilisation
              inappropriée du site.
            </p>
          </section>

          <section id="donnees">
            <h2 className="text-xl md:text-2xl font-bold text-[#604D3D] mb-2">7. Données personnelles</h2>
            <p>
              Les données collectées (comptes, commentaires, contact) sont traitées conformément au RGPD pour la
              gestion des services et l’amélioration du site. Vous disposez d’un droit d’accès, de rectification et
              de suppression en écrivant à{" "}
              <a
                href="mailto:contact@cinedelices.fr"
                className="text-[var(--button-color)] underline hover:text-[#a31616]"
              >
                contact@cinedelices.fr
              </a>.
            </p>
          </section>

          <section id="modifications">
            <h2 className="text-xl md:text-2xl font-bold text-[#604D3D] mb-2">8. Modifications</h2>
            <p>
              CinéDélices peut modifier les présentes CGU à tout moment. Les changements entrent en vigueur dès leur
              mise en ligne. Les utilisateurs sont invités à consulter régulièrement cette page.
            </p>
          </section>

          <section id="droit">
            <h2 className="text-xl md:text-2xl font-bold text-[#604D3D] mb-2">9. Droit applicable</h2>
            <p>
              Les présentes CGU sont régies par le droit français. Tout litige relève de la compétence exclusive des
              tribunaux français.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
