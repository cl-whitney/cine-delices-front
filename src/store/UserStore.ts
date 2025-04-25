import { create } from 'zustand';
import type { IUserStore } from '../@types/users';
import api from '../api';

export const useUserStore = create<IUserStore>((set) => ({
  users: [],
  fetchUsers: async () => {
    try {
      const response = await api.get('/users');
      // console.log('Réponse API :', response.data);
      set({ users: [...response.data] });
    } catch (_e) {
      // console.log('Erreur lors de la récupération des recettes : ', _e);
    }
  },
}));
