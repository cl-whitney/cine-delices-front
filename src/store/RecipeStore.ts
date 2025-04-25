import { create } from 'zustand';
import type { IRecipeStore } from '../@types/recipe';
import api from '../api';

export const useRecipeStore = create<IRecipeStore>((set) => ({
  recipes: [],
  fetchRecipes: async () => {
    try {
      const response = await api.get('/recettes');
      // console.log('Réponse API :', response.data);
      set({ recipes: [...response.data] });
    } catch (_e) {
      // console.log('Erreur lors de la récupération des recettes : ', _e);
    }
  },
}));
