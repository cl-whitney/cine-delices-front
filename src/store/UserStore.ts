import { create } from 'zustand';
import type { IUserStore } from '../@types/users';
import api from '../api';

export const useUserStore = create<IUserStore>((set) => ({
  users: [],
  currentUser: null,
  fetchUsers: async () => {
    try {
      const response = await api.get('/users');
      // console.log('Réponse API :', response.data);
      set({ users: [...response.data] });
    } catch (_e) {
      // console.log('Erreur lors de la récupération des recettes : ', _e);
    }
  },
  fetchUserById: async (id: number | string) => {
    try {
      const response = await api.get(`/users/${id}`);
      set({ currentUser: response.data });
    } catch (_e) {
      // console.log('Erreur lors de la récupération de l'utilisateur : ', _e);
    }
  },
  setCurrentUser: (user) => set({ currentUser: user }),
}));
