export interface IIngredient {
  id: number;
  name: string;
  unity: string;
  statuts: boolean;
  created_at: string;
  updated_at?: string;
}

export interface IQuantity {
  id: number;
  recipeId: number;
  ingredientId: number;
  quantity: number;
  created_at: string;
  updated_at?: string;
}

export interface IIngredientWithQuantity {
  ingredient: IIngredient;
  quantity: IQuantity;
}
