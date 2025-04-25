export default function Contact() {
  return (
    <div
      aria-label="Page de contact de CinéDélices"
      className="my-20 bg-gray-200 p-4 rounded-lg shadow-xl"
    >
      <section id="contact" className="contact-section">
        <header>
          <h1 className="contact-title">Contact CinéDélices</h1>
        </header>

        <address aria-labelledby="contact">
          <p className="font-semibold my-[0.4rem] text-[0.9rem] md:my-4 md:text-[1rem]">
            42 rue du Cinéma, 75000 Paris, France
          </p>
          <p className="font-semibold my-[0.4rem] text-[0.9rem] md:my-4 md:text-[1rem]">
            <a
              href="mailto:contact@CinéDélies.fr"
              aria-label="Envoyer un email à CinéDélices"
            >
              Email : contact@cinedelices.fr
            </a>
          </p>
          <p className="font-semibold my-[0.4rem] text-[0.9rem] md:my-4 md:text-[1rem]">
            <a
              href="tel:+3378253695"
              aria-label="Appeler CinéDélices au 00 78 25 36 95"
            >
              Téléphone : 00 78 25 36 95
            </a>
          </p>
        </address>
      </section>
    </div>
  );
}
