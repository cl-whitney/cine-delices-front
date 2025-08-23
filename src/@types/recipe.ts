enum Difficulty {
  Facile = 'Facile',
  Moyen = 'Moyen',
  Difficile = 'Difficile',
}

enum Cost {
  PetitBudget = 'Petit Budget',
  RapportQualitePrix = 'Rapport Qualité Prix',
  Couteux = 'Couteux',
}

export interface IRecipe {
  id: number;
  title: string;
  image?: string;
  description?: string;
  instruction: string;
  duration: string;
  difficulty: Difficulty;
  cost: Cost;
  user_id?: number; // ? 'user_id?' si supprimé
  status: boolean;
  created_at: string;
  updated_at?: string;
}

export interface IRecipeProps {
  recipe: IRecipe;
}

export interface IRecipeStore {
  recipes: IRecipe[];
  // permet de déclencher une fonction asynchrone (ex: requête http pour récupérer des datas api)
  fetchRecipes: () => Promise<void>;
}
