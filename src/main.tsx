import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

declare global {
  interface Window {
    apiBaseUrl: string | undefined;
  }
}

window.apiBaseUrl = import.meta.env.API_BASE_URL;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
