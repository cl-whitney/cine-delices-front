export default function HeaderLogIn() {
	return (
		// Ajouter une condition (Si visiteur alors le code en dessous s'affiche, si utilisateur connecter, alors cf maquettes/wireframe)
		<div className="auth-buttons">
			<button
				type="button"
				// onClick={() => }
				aria-label="S'inscrire"
			>
				S'inscrire
			</button>
			<button
				type="button"
				// onClick={() => }
				aria-label="Se connecter"
			>
				Se connecter
			</button>
		</div>
	);
}
