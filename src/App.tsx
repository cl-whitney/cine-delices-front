import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';
import SearchPage from './pages/SearchPage';
import SignIn from './pages/SignIn';

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* En-tête du site */}
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recettes" element={<SearchPage />} />
            <Route path="/connexion" element={<LogIn />} />
            <Route path="/inscription" element={<SignIn />} />
            <Route path="/profil" element={<Profile />} />
            {/* <Route path='' element={}/> */}
            {/* <Route path='' element={}/> */}
            <Route
              path="*"
              element={<div>Erreur 404 : cette page n'a pas été trouvée !</div>}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
