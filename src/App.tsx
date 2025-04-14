import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

export default function App() {
	return (
		<>
			{/* En-tête du site */}
			<Header />
			{/* Contenu principal */}
			<HomePage />
			{/* Pied de page */}
			<Footer />
		</>
	);
}
