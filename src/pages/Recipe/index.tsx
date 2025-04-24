import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { IRecipe } from '../../@types/recipe';

export default function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<IRecipe>();

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/recettes/${id}`,
        );
        setRecipe(response.data);
      } catch (_e) {
        // console.log('Erreur :', _e)
      }
    }
    fetchRecipes();
  });

  return (
    <>
      {recipe ? (
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
          <p>
            Poposé par :
            {recipe.user_id ? recipe.user_id : 'Utilisateur Supprimé'}
          </p>
          <p>
            Mis en ligne le : {recipe.created_at} / Dernière modification le :
            {recipe.updated_at ? recipe.updated_at : recipe.created_at}
          </p>
        </>
      ) : (
        <p>Chargement de la recette...</p>
      )}
    </>
  );
}
