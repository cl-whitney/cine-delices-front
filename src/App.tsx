import './App.css';
import './assets/fonts/fonts.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import AddRecipe from './pages/AddRecipe';
import CGU from './pages/CGU';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import HomePage from './pages/HomePage';
import LegalNotices from './pages/LegalNotices';
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';
import Recipe from './pages/Recipe';
import SearchPage from './pages/SearchPage';
import SignIn from './pages/SignIn';

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* En-tête du site */}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recettes" element={<SearchPage />} />
            <Route path="/connexion" element={<LogIn />} />
            <Route path="/inscription" element={<SignIn />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/cgu" element={<CGU />} />
            <Route path="/mentions-legales" element={<LegalNotices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/recette" element={<Recipe />} />
            <Route path="/Addrecette/" element={<AddRecipe />} />
            {/* <Route path='' element={}/> */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
