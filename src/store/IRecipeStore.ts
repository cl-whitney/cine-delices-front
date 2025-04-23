import axios from 'axios';
import { create } from 'zustand';
import type { IRecipeStore } from '../@types/recipe';

export const useRecipeStore = create<IRecipeStore>((set) => ({
  recipe: [],
  fetchRecipe: async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/recettes');
      set({ recipe: response.data.recipes });
    } catch (_e) {
      console.log('Erreur lors de la récupération des recettes : ', _e);
    }
  },
}));
