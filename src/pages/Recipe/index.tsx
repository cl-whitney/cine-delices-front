import {} from 'react';
// Import type pour esquiver l'erreur de biome sur l'import (import de typage et non dans le code exécutable)
import type { IRecipeProps } from '../../@types/recipe';

export default function Recipe({ recipe }: IRecipeProps) {
  return (
    <>
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.description}</p>
      <table>
        <tr>
          <td>{recipe.difficulty}</td>
          <td>{recipe.cost}</td>
        </tr>
      </table>
      <p>Poposé par : {recipe.user_id}</p>
      <p>
        Mis en ligne le : {recipe.created_at} / Dernière modification le :
        {recipe.updated_at}
      </p>
    </>
  );
}
