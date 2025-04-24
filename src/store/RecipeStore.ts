import axios from 'axios';
import { create } from 'zustand';
import type { IRecipeStore } from '../@types/recipe';

export const useRecipeStore = create<IRecipeStore>((set) => ({
  recipes: [],
  fetchRecipes: async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/recettes');
      console.log('Réponse API :', response.data);
      console.log('Données reçues :', response.data.recipes);
      console.log(
        'Type de response.data.recipes :',
        typeof response.data.recipes,
      );
      set({ recipes: response.data.recipes });
    } catch (_e) {
      console.log('Erreur lors de la récupération des recettes : ', _e);
    }
  },
}));
