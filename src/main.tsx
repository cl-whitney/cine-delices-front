import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

// TODO : Changer la méthode d'appel de la variable .env
// (cause des bugs)
// declare global {
//   interface Window {
//     apiBaseUrl: string | undefined;
//   }
// }

// window.apiBaseUrl = import.meta.env.API_BASE_URL;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
