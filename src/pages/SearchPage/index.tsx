import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { useRecipeStore } from '../../store/RecipeStore';

export default function SearchPage() {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const handleCheckboxClick = (e: React.FormEvent) => {
    e.stopPropagation();
  };

  const { recipes, fetchRecipes } = useRecipeStore();
  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
    <>
      <div className="flex flex-row justify-center my-10">
        <div
          className={`dropdown dropdown-start ${isActive1 ? 'is-active' : ''}`}
        >
          <button
            type="button"
            tabIndex={0}
            aria-haspopup="true"
            aria-controls="dropdown-menu-1"
            className="btn m-1 shadow-xl border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
            onClick={() => setIsActive1(!isActive1)}
          >
            Type de plat{' '}
            <FontAwesomeIcon
              icon={faChevronDown}
              size="lg"
              style={{ color: 'var(--button-color)' }}
            />
          </button>
          <ul
            id="dropdown-menu-1"
            role="menu"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-xl"
          >
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                id="checkbox1"
                className="checkbox border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
                onClick={handleCheckboxClick}
              />
              <li>Dessert</li>
            </div>
          </ul>
        </div>

        <div
          className={`dropdown dropdown-start ${isActive2 ? 'is-active' : ''}`}
        >
          <button
            type="button"
            tabIndex={0}
            aria-haspopup="true"
            aria-controls="dropdown-menu-2"
            className="btn m-1 shadow-xl border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
            onClick={() => setIsActive2(!isActive2)}
          >
            Série ou Film{' '}
            <FontAwesomeIcon
              icon={faChevronDown}
              size="lg"
              style={{ color: 'var(--button-color)' }}
            />
          </button>
          <ul
            id="dropdown-menu-2"
            role="menu"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-xl"
          >
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                id="checkbox2"
                className="checkbox border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
                onClick={handleCheckboxClick}
              />
              <li>Film</li>
            </div>
          </ul>
        </div>

        <div
          className={`dropdown dropdown-start ${isActive3 ? 'is-active' : ''}`}
        >
          <button
            type="button"
            tabIndex={0}
            aria-haspopup="true"
            aria-controls="dropdown-menu-3"
            className="btn m-1 shadow-xl border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
            onClick={() => setIsActive3(!isActive3)}
          >
            Genre{' '}
            <FontAwesomeIcon
              icon={faChevronDown}
              size="lg"
              style={{ color: 'var(--button-color)' }}
            />
          </button>
          <ul
            id="dropdown-menu-3"
            role="menu"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-xl"
          >
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                id="checkbox3"
                className="checkbox border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
                onClick={handleCheckboxClick}
              />
              <li>Horreur</li>
            </div>
          </ul>
        </div>
      </div>

      <div className="flex items-center flex-col px-4 md:px-8 pb-12 rounded-lg">
        <div className="bg-gray-200 p-6 rounded-lg shadow-xl md:w-[75%]">
          <div className="grid grid-cols-1 gap-6 justify-items-center md:grid-cols-3 md:gap-18">
            {recipes.length > 0 ? (
              recipes.map((recipe) => <Card key={recipe.id} recipe={recipe} />)
            ) : (
              <p className="font-semibold my-[0.4rem] text-[0.9rem] md:my-4 md:text-[1rem]">
                Aucune recette trouvée
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
