import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import CGU from './pages/CGU';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import HomePage from './pages/HomePage';
import LegalNotices from './pages/LegalNotices';
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
            <Route path="/cgu" element={<CGU />} />
            <Route path="/mentions-legales" element={<LegalNotices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/a-propos" element={<About />} />
            {/* <Route path='' element={}/> */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
