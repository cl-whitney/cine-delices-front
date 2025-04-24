import { create } from 'zustand';
import type { ILogStore } from '../@types/log';
import api from '../api';

export const useLogStore = create<ILogStore>((set) => ({
  user: null,
  token: null,
  login: async (email, password) => {
    try {
      const response = await api.post('/auth/connexion', {
        email,
        password,
      });
      const { user, token } = response.data;
      set({ user, token });
      // Pour la persistance : on stock la data dans le local storage
      localStorage.setItem('token', token);
    } catch (_e) {
      // console.log('Erreur de connexion :', _e);
      throw new Error('Erreur de connextion');
    }
  },
  logout: async () => {
    try {
      await api.post('/auth/deconnexion', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      set({ user: null, token: null });
      localStorage.removeItem('token'); // Suppression du token conservé dans le local
    } catch (_e) {
      // console.log('Erreur lors de la déconnexion :', _e);
      throw new Error('Echec lors de la déconnexion');
    }
  },
}));
