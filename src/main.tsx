import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// commentaire pour ignorer le Non null asstertion de Biome
// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			{/* Rendu de l'app (Home Page) */}
			<App />
			{/* Import qui servira à gérer les routes  */}
			<Routes>
				{/* <Route /> Pour chaque element (ex: page connexion / page recette / page recherche...*/}
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
