import {
  faChevronDown,
  faImage,
  faPlus,
  faMinus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function AddRecipe() {
  const [ingredients, setIngredients] = useState<string[]>(["", "", "", ""]);
  const [steps, setSteps] = useState<string[]>([""]);

  const handleAddIngredient = () => setIngredients((p) => [...p, ""]);
  const handleRemoveLastIngredient = () =>
    setIngredients((p) => (p.length > 1 ? p.slice(0, -1) : p));

  const handleIngredientChange = (i: number, v: string) =>
    setIngredients((p) => p.map((x, idx) => (idx === i ? v : x)));

  const handleAddStep = () => setSteps((p) => [...p, ""]);
  const handleRemoveLastStep = () =>
    setSteps((p) => (p.length > 1 ? p.slice(0, -1) : p));

  return (
    <main className="bg-gray-100 py-10">
      <section className="w-[92%] max-w-5xl mx-auto space-y-8">
        {/* Bloc 1 : Titre / Catégories / Description / Image */}
        <div className="bg-white border border-gray-300 rounded-md shadow-sm p-5 md:p-6 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-[#604D3D]">
                Titre :
              </label>
              <input
                type="text"
                placeholder="Titre de la recette"
                className="w-full h-10 rounded-md bg-gray-100/70 border border-gray-300 px-3 text-gray-800 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--button-color)]"
              />

              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 h-9 rounded-full px-3 bg-gray-100/70 border border-gray-300 text-[#333] hover:bg-white"
                >
                  Catégorie
                  <FontAwesomeIcon icon={faChevronDown} className="text-[#604D3D]" />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 h-9 rounded-full px-3 bg-gray-100/70 border border-gray-300 text-[#333] hover:bg-white"
                >
                  Tag
                  <FontAwesomeIcon icon={faChevronDown} className="text-[#604D3D]" />
                </button>
              </div>

              <label className="block text-sm font-semibold text-[#604D3D]">
                Description :
              </label>
              <textarea
                placeholder="Ajouter une description…"
                className="w-full min-h-28 rounded-md bg-gray-100/70 border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--button-color)]"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-[#604D3D]">
                Ajouter une image :
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-sm border-gray-300"
                />
                <FontAwesomeIcon icon={faImage} className="text-[var(--button-color)]" />
              </div>

              {/* Durée / Difficulté / Coût */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4">
                <div className="flex gap-2">
                  <input
                    type="number"
                    min={0}
                    placeholder="h"
                    className="w-16 h-9 rounded-md bg-gray-100/70 border border-gray-300 px-2 text-gray-800 focus:bg-white focus:ring-2 focus:ring-[var(--button-color)] outline-none"
                  />
                  <input
                    type="number"
                    min={0}
                    max={59}
                    placeholder="min"
                    className="w-20 h-9 rounded-md bg-gray-100/70 border border-gray-300 px-2 text-gray-800 focus:bg-white focus:ring-2 focus:ring-[var(--button-color)] outline-none"
                  />
                </div>

                <button
                  type="button"
                  className="flex-1 justify-between inline-flex items-center h-9 rounded-md px-3 bg-gray-100/70 border border-gray-300 text-[#333] hover:bg-white"
                >
                  Difficulté
                  <FontAwesomeIcon icon={faChevronDown} className="text-[#604D3D]" />
                </button>

                <button
                  type="button"
                  className="flex-1 justify-between inline-flex items-center h-9 rounded-md px-3 bg-gray-100/70 border border-gray-300 text-[#333] hover:bg-white"
                >
                  Coût
                  <FontAwesomeIcon icon={faChevronDown} className="text-[#604D3D]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bloc 2 : Ingrédients */}
        <div className="bg-white border border-gray-300 rounded-md shadow-sm p-5 md:p-6 space-y-4">
          <h2 className="text-lg md:text-xl font-extrabold text-[#604D3D]">Ingrédients</h2>

          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faUsers} className="text-[var(--button-color)]" />
            <label className="text-sm font-semibold text-[#333]">Nombre de personnes :</label>
            <input
              type="number"
              min={1}
              max={50}
              className="h-9 w-20 rounded-md bg-gray-100/70 border border-gray-300 px-3 text-gray-800 focus:bg-white focus:ring-2 focus:ring-[var(--button-color)] outline-none"
            />
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleRemoveLastIngredient}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[var(--button-color)] text-white hover:bg-[#a31616] transition"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <button
              type="button"
              onClick={handleAddIngredient}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[var(--button-color)] text-white hover:bg-[#a31616] transition"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="relative">
                <input
                  type="text"
                  placeholder="Ingrédient"
                  className="w-full h-10 rounded-md bg-gray-100/70 border border-gray-300 px-3 text-gray-800 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--button-color)]"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(index, e.target.value)}
                  list={`ingredient-options-${index}`}
                />
                <datalist id={`ingredient-options-${index}`}>
                  <option value="Sel" />
                  <option value="Poivre" />
                  <option value="Tomate" />
                  <option value="Sucre" />
                </datalist>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#604D3D]">
                  ▾
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bloc 3 : Instructions */}
        <div className="bg-white border border-gray-300 rounded-md shadow-sm p-5 md:p-6 space-y-4">
          <h2 className="text-lg md:text-xl font-extrabold text-[#604D3D]">Instructions</h2>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleRemoveLastStep}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[var(--button-color)] text-white hover:bg-[#a31616] transition"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <button
              type="button"
              onClick={handleAddStep}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[var(--button-color)] text-white hover:bg-[#a31616] transition"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <div className="space-y-3">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="mt-2 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-amber-300/70 text-xs font-bold text-[#333]">
                  {index + 1}
                </span>
                <textarea
                  placeholder="Décrire l’étape…"
                  className="w-full min-h-24 rounded-md bg-gray-100/70 border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--button-color)]"
                  value={step}
                  onChange={(e) =>
                    setSteps((p) => p.map((x, i) => (i === index ? e.target.value : x)))
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
