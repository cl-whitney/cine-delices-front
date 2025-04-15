import Card from '../components/Card';

export default function SearchPage() {
  return (
    <>
      <button
        type="button"
        aria-label="Type de plat"
        //TODO: Button menu déroulant (filtre)
        //onClick={}
      >
        Type de plat
      </button>
      <button
        type="button"
        aria-label="Film ou série"
        //TODO: Button menu déroulant (filtre)
        //onClick={}
      >
        Film ou série
      </button>
      <button
        type="button"
        aria-label="Tag"
        //TODO: Button menu déroulant (filtre)
        //onClick={}
      >
        Tag
      </button>
      {/* Boucler la card pour un nombre donner */}
      <Card />
    </>
  );
}
