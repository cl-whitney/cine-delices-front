import {
  faChevronDown,
  faClock,
  faEuroSign,
  faFireBurner,
  faImage,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function AddRecipe() {
  const [ingredients, setIngredients] = useState(['']);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleRemoveLastIngredient = () => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.slice(0, -1));
    }
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  };

  const [steps, setSteps] = useState(['']);

  const handleAddStep = () => {
    setSteps([...steps, '']);
  };

  const handleRemoveLastStep = () => {
    if (steps.length > 1) {
      setSteps(steps.slice(0, -1));
    }
  };

  const handleStepChange = (index, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = value;
    setSteps(updatedSteps);
  };

  return (
    <div className="space-y-6 ">
      <div className="grid md:grid-cols-2 gap-6 items-start rounded-lg shadow-xl bg-gray-100 pl-6 py-6">
        <div>
          <h2 className="text-[var(--button-color)] text-shadow-lg">
            Nom de la recette
          </h2>
          <input
            type="text"
            placeholder="Nom de la recette"
            className="input border-b-2 border-gray-300 focus:outline-none focus:border-[var(--button-color)] border-b-[var(--button-color)] mb-4"
          />
          <h2 className="text-[var(--button-color)] text-shadow-lg">
            Selectionner les catégories
          </h2>
          <div className="flex flex-row mb-10 ">
            <div className="dropdown dropdown-start">
              <button type="button" tabIndex={0} className="btn m-1 shadow-xl">
                Type de plat{' '}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="lg"
                  style={{ color: 'var(--button-color)' }}
                />
              </button>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-xl">
                <div className="flex  flex-row items-center">
                  <input type="checkbox" className="checkbox" />
                  <li>
                    <a>Item 1</a>
                  </li>
                </div>
              </ul>
            </div>
            <div className="dropdown dropdown-start">
              <button type="button" tabIndex={0} className="btn m-1 shadow-xl">
                Serie ou Film{' '}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="lg"
                  style={{ color: 'var(--button-color)' }}
                />
              </button>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-xl">
                <div className="flex flex-row items-center">
                  <input type="checkbox" className="checkbox" />
                  <li>
                    <a>Item 1</a>
                  </li>
                </div>
              </ul>
            </div>
            <div className="dropdown dropdown-start">
              <button type="button" tabIndex={0} className="btn m-1 shadow-xl">
                Genre{' '}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="lg"
                  style={{ color: 'var(--button-color)' }}
                />
              </button>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-xl">
                <div className="flex flex-row items-center">
                  <input type="checkbox" className="checkbox" />
                  <li>
                    <a>Item 1</a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <h2 className="text-[var(--button-color)] text-shadow-lg">
            Présentation de la recette
          </h2>
          <textarea
            className="textarea textarea-lg border-2 border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
            placeholder="Présentation de la recette"
          />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-[var(--button-color)] text-shadow-lg">
            Selectionner une image
          </h2>
          <FontAwesomeIcon
            icon={faImage}
            size="2xl"
            style={{ color: 'rgb(251, 182, 0)' }}
          />
          <input
            type="file"
            className="file-input file-input-warning file-input-l"
          />
        </div>
      </div>

      <div className="flex-row  justify-items-center md:flex md:justify-evenly bg-gray-100 p-4 rounded-lg shadow-xl">
        <div className="flex items-center gap-2">
          {' '}
          <FontAwesomeIcon
            icon={faClock}
            size="2xl"
            style={{ color: 'var(--button-color)' }}
          />{' '}
          <input
            type="time"
            className="input input-l border-gray-300 focus:outline-none focus:border-[var(--button-color)] px-10 hover:cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faFireBurner}
            size="2xl"
            style={{ color: 'var(--button-color)' }}
          />{' '}
          <div className="dropdown dropdown-start ml-4 ">
            <button
              type="button"
              tabIndex={0}
              className="btn m-1 border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
            >
              Difficulté{' '}
              <FontAwesomeIcon
                icon={faChevronDown}
                size="lg"
                style={{ color: 'var(--button-color)' }}
              />
            </button>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2">
              <div className="flex flex-row items-center">
                <input
                  type="checkbox"
                  className="checkbox border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
                />
                <li>
                  <a>Item 1</a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faEuroSign}
            size="2xl"
            style={{ color: 'var(--button-color)' }}
          />{' '}
          <div className="dropdown dropdown-start ml-4">
            <button
              type="button"
              tabIndex={0}
              className="btn m-1 border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
            >
              Coût{' '}
              <FontAwesomeIcon
                icon={faChevronDown}
                size="lg"
                style={{ color: 'var(--button-color)' }}
              />
            </button>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2">
              <div className="flex flex-row items-center">
                <input
                  type="checkbox"
                  className="checkbox border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
                />
                <li>
                  <a>Item 1</a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-xl">
        <div className="items-center">
          <h2 className="text-[var(--button-color)] text-shadow-lg">
            Ingrédients
          </h2>
          <p className="text-black text-shadow-lg">Nombre de personnes</p>
          <div>
            <FontAwesomeIcon
              icon={faUsers}
              size="xl"
              style={{ color: 'var(--button-color)' }}
            />
            <input
              type="number"
              className="input validator border-b-2 border-gray-300 focus:outline-none focus:border-[var(--button-color)] border-b-[var(--button-color)] w-1/2 md:w-1/13 mb-2 ml-2"
              required
              placeholder="Nombre de personnes"
              min="1"
              max="50"
              title="Nombre de personnes"
            />
          </div>
        </div>
        <p className="text-black text-shadow-lg">Liste des ingrédients</p>
        <button
          type="button"
          className="btn btn-circle bg-[var(--button-color)] text-white shadow-xl hover:bg-[var(--hover-button-color)] mx-6 my-4"
          onClick={handleRemoveLastIngredient}
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-circle bg-[var(--button-color)] text-white shadow-xl hover:bg-[var(--hover-button-color)]"
          onClick={handleAddIngredient}
        >
          +
        </button>
        <ul className="grid md:grid-flow-col md:grid-rows-6 gap-y-2 gap-x-4 list-decimal pl-4 md:pl-9">
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <input
                type="text"
                className="input border-b-2 border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
                placeholder="Choisissez un ingrédient"
                list="ingredient-options"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
              />
              <datalist id="ingredient-options">
                <option value="Sel" />
                <option value="Poivre" />
                <option value="Tomate" />
                <option value="Sucre" />
              </datalist>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-xl">
        <h2 className="text-[var(--button-color)] text-shadow-lg">
          Préparation par étapes
        </h2>
        <div className="mb-4">
          <button
            type="button"
            className="btn btn-circle bg-[var(--button-color)] text-white shadow-xl hover:bg-[var(--hover-button-color)] mx-6 my-2"
            onClick={handleRemoveLastStep}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-circle bg-[var(--button-color)] text-white shadow-xl hover:bg-[var(--hover-button-color)]"
            onClick={handleAddStep}
          >
            +
          </button>
        </div>
        <ul className="steps steps-vertical grid md:grid-flow-col md:grid-rows-6 gap-y-2 gap-x-4 md:pl-4">
          {steps.map((step, index) => (
            <li key={index} className="step step-warning flex mb-4">
              <textarea
                className="textarea textarea-lg border-2 border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
                placeholder="Décrire la recette"
                value={step}
                onChange={(e) => {
                  const updatedSteps = [...steps];
                  updatedSteps[index] = e.target.value;
                  setSteps(updatedSteps);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
