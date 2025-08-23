export default function Contact() {
  return (
    <main className="bg-gray-100 py-12">
      <section
        aria-label="Page de contact de CinéDélices"
        className="w-[92%] max-w-3xl mx-auto bg-white border border-gray-300 rounded-b-xl shadow-md px-6 md:px-12 py-10"
      >
        <header className="mb-8">
          <h1 className="text-center text-2xl md:text-3xl font-extrabold tracking-wide text-[#604D3D]">
            Contact CinéDélices
          </h1>
          <div className="mt-2 h-px bg-gray-300 w-full" />
        </header>

        <address
          aria-labelledby="contact"
          className="not-italic space-y-4 text-center text-black text-base md:text-lg leading-relaxed"
        >
          <p>42 rue du Cinéma, 75000 Paris, France</p>
          <p>
            <a
              href="mailto:contact@cinedelices.fr"
              aria-label="Envoyer un email à CinéDélices"
              className="text-[var(--button-color)] underline hover:text-[#a31616] transition-colors"
            >
              contact@cinedelices.fr
            </a>
          </p>
          <p>
            <a
              href="tel:+3378253695"
              aria-label="Appeler CinéDélices au 00 78 25 36 95"
              className="text-[var(--button-color)] underline hover:text-[#a31616] transition-colors"
            >
              00 78 25 36 95
            </a>
          </p>
        </address>
      </section>
    </main>
  );
}
