import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx';

import HomePage from './pages/HomePage.tsx';
import LogIn from './pages/LogIn.tsx';
import Profile from './pages/Profile.tsx';
import SearchPage from './pages/SearchPage.tsx';
import SignIn from './pages/SignIn.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* Rendu de l'app (Home Page) */}
      <App />
      {/* Import qui servira à gérer les routes  */}
      <Routes>
        {/* <Route /> Pour chaque element (ex: page connexion / page recette / page recherche...*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/recettes" element={<SearchPage />} />
        <Route path="/connexion" element={<LogIn />} />
        <Route path="/inscription" element={<SignIn />} />
        <Route path="/profil" element={<Profile />} />
        {/* <Route path='' element={}/> */}
        <Route
          path="*"
          element={<div>Erreur 404 : cette page n'a pas été trouvée !</div>}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
