import {
  faClock,
  faEuroSign,
  faFireBurner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Recipe() {
  return (
    <div className="space-y-6  ">
      <div className="grid md:grid-cols-2 gap-6 items-start rounded-lg shadow-xl bg-gray-100 px-4 py-4">
        <div>
          <h1 className="text-[var(--button-color)] text-shadow-lg">
            L’entrecôte du Seigneur des Anneaux
          </h1>
          <div className="flex gap-2 mb-4">
            <span className="btn btn-success text-white">Plat</span>
            <span className="btn btn-primary text-white">Film</span>
            <span className="btn btn-warning text-white">Genre</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
            amet urna eget sapien aliquet tincidunt. Fusce vel facilisis ex.
            Curabitur vehicula, nisi ac convallis mattis, urna quam euismod
            odio, nec scelerisque magna mauris a metus. Integer ut sodales
            metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam sit amet urna eget sapien aliquet tincidunt. Fusce vel
            facilisis ex. Curabitur vehicula, nisi ac convallis mattis, urna
            quam euismod odio, nec scelerisque magna mauris a metus. Integer ut
            sodales metus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nullam sit amet urna eget sapien aliquet tincidunt. Fusce vel
            facilisis ex. Curabitur vehicula, nisi ac convallis mattis, urna
            quam euismod odio, nec scelerisque magna mauris a metus. Integer ut
            sodales metus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nullam sit amet urna eget sapien aliquet tincidunt. Fusce vel
            facilisis ex. Curabitur vehicula, nisi ac convallis mattis, urna
            quam euismod odio, nec scelerisque magna mauris a metus. Integer ut
            sodales metus.
          </p>
        </div>
        <img
          src="/src/assets/recipe.jpg"
          alt="L’entrecôte du Seigneur des Anneaux"
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="flex justify-evenly items-center bg-gray-100 p-4 rounded-lg shadow-xl">
        <div className="flex items-center gap-2">
          <span className="font-bold">
            {' '}
            <FontAwesomeIcon
              icon={faClock}
              size="xl"
              style={{ color: 'var(--button-color)' }}
            />{' '}
            4 heures
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">
            <FontAwesomeIcon
              icon={faFireBurner}
              size="xl"
              style={{ color: 'var(--button-color)' }}
            />{' '}
            Facile
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-bold">
            <FontAwesomeIcon
              icon={faEuroSign}
              size="xl"
              style={{ color: 'var(--button-color)' }}
            />{' '}
            Moyen
          </span>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-[var(--button-color)] text-shadow-lg">
            Ingrédients
          </h2>
        </div>
        <div className="flex items-center mb-6">
          <button
            type="button"
            className="btn btn-m bg-white hover:bg-[var(--button-color)] hover:text-white transition-colors rounded-lg"
          >
            -
          </button>
          <span className="font-medium bg-white px-12 py-1.5">4 personnes</span>
          <button
            type="button"
            className="btn btn-m bg-white hover:bg-[var(--button-color)]  hover:text-white transition-colors rounded-lg"
          >
            +
          </button>
        </div>
        <ul className=" list-disc grid grid-flow-col grid-rows-6 gap-y-2 gap-x-4 pl-5">
          <li>1 belle entrecôte de bœuf</li>
          <li>2 gousses d’ail</li>
          <li>1 échalote</li>
          <li>2 cuillères à soupe d’huile d’olive</li>
          <li>1 cuillère à soupe de beurre</li>
          <li>1 branche de thym</li>
          <li>1 branche de romarin</li>
          <li>1 cuillère à café de poivre concassé</li>
          <li>1 cuillère à café de sel</li>
          <li>1 cuillère à soupe de vinaigre balsamique (optionnel)</li>
          <li>100 g de champignons de Paris (optionnel)</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-xl">
        <div>
          <h2 className="text-[var(--button-color)] text-shadow-lg">
            Préparation
          </h2>
        </div>
        <ul className="steps steps-vertical grid grid-flow-col grid-rows-6 gap-y-2 gap-x-4 pl-9">
          <div className="flex items-center mb-4">
            <li className="step step-warning" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam cumque dolor nam accusamus modi voluptatibus nisi
              mollitia minima fugiat facilis velit numquam, commodi ratione
              aliquid, vitae hic sint molestiae? Doloremque!
            </p>
          </div>
          <div className="flex items-center mb-4">
            <li className="step step-warning" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam cumque dolor nam accusamus modi voluptatibus nisi
              mollitia minima fugiat facilis velit numquam, commodi ratione
              aliquid, vitae hic sint molestiae? Doloremque!
            </p>
          </div>
          <div className="flex items-center mb-4">
            <li className="step step-warning" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam cumque dolor nam accusamus modi voluptatibus nisi
              mollitia minima fugiat facilis velit numquam, commodi ratione
              aliquid, vitae hic sint molestiae? Doloremque!
            </p>
          </div>
          <div className="flex items-center mb-4">
            <li className="step step-warning" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam cumque dolor nam accusamus modi voluptatibus nisi
              mollitia minima fugiat facilis velit numquam, commodi ratione
              aliquid, vitae hic sint molestiae? Doloremque!
            </p>
          </div>
          <div className="flex items-center mb-4">
            <li className="step step-warning" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam cumque dolor nam accusamus modi voluptatibus nisi
              mollitia minima fugiat facilis velit numquam, commodi ratione
              aliquid, vitae hic sint molestiae? Doloremque!
            </p>
          </div>
          <div className="flex items-center mb-4">
            <li className="step step-warning" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam cumque dolor nam accusamus modi voluptatibus nisi
              mollitia minima fugiat facilis velit numquam, commodi ratione
              aliquid, vitae hic sint molestiae? Doloremque!
            </p>
          </div>
          <div className="flex items-center mb-4">
            <li className="step step-warning" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam cumque dolor nam accusamus modi voluptatibus nisi
              mollitia minima fugiat facilis velit numquam, commodi ratione
              aliquid, vitae hic sint molestiae? Doloremque!
            </p>
          </div>
          <div className="flex items-center mb-4">
            <li className="step step-warning" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam cumque dolor nam accusamus modi voluptatibus nisi
              mollitia minima fugiat facilis velit numquam, commodi ratione
              aliquid, vitae hic sint molestiae? Doloremque!
            </p>
          </div>
          <div className="flex items-center mb-4">
            <li className="step step-warning" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam cumque dolor nam accusamus modi voluptatibus nisi
              mollitia minima fugiat facilis velit numquam, commodi ratione
              aliquid, vitae hic sint molestiae? Doloremque!
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
}
