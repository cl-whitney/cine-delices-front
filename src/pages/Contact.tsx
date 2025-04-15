export default function Contact() {
  return (
    <main
      aria-label="Page de contact de CinéDélices"
      className="contact-container"
    >
      <section id="contact" className="contact-section">
        <header>
          <h1 className="contact-title">Contact – CinéDélices</h1>
        </header>

        <address aria-labelledby="contact">
          <p>
            Adresse : 42 rue du Cinéma, 75000 Paris, France
            <br />
            Email :{' '}
            <a
              href="mailto:contact@CinéDélies.fr"
              aria-label="Envoyer un email à CinéDélices"
            >
              contact@cinedelices.fr
            </a>
            <br />
            Téléphone :{' '}
            <a
              href="tel:+3378253695"
              aria-label="Appeler CinéDélices au 00 78 25 36 95"
            >
              00 78 25 36 95
            </a>
          </p>
        </address>
      </section>
    </main>
  );
}
