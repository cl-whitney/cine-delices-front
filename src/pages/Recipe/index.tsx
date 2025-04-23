import axios from 'axios';
// Import type pour esquiver l'erreur de biome sur l'import (import de typage et non dans le code exécutable)
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { IRecipe } from '../../@types/recipe';

export default function Recipe() {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState<IRecipe>();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/recettes/${id}`,
        );
        setRecipeData(response.data);
      } catch (_e) {}
    };
    fetchRecipe();
  }, [id]);
  return (
    <>
      {recipeData ? (
        <>
          <h3>{recipeData.title}</h3>
          <img src={recipeData.image} alt={recipeData.title} />
          <p>{recipeData.description}</p>
          <table>
            <tr>
              <td>{recipeData.difficulty}</td>
              <td>{recipeData.cost}</td>
            </tr>
          </table>
          <p>Poposé par : {recipeData.user_id}</p>
          <p>
            Mis en ligne le : {recipeData.created_at} / Dernière modification le
            :{recipeData.updated_at}
          </p>
        </>
      ) : (
        <p>Chargement de la recette...</p>
      )}
    </>
  );
}
