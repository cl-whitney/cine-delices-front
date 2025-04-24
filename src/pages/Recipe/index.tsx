import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { IRecipe } from '../../@types/recipe';
// import { useUserStore } from '../../store/UserStore';
import api from '../../api';

export default function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<IRecipe>();

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await api.get(`/recettes/${id}`);
        setRecipe(response.data);
      } catch (_e) {
        // console.log('Erreur :', _e)
      }
    }
    fetchRecipes();
  });

  // ? Fixer l'authorisation pour avoir les infos user en étant un visiteur

  // const { users, fetchUsers } = useUserStore();

  // useEffect(() => {
  //   fetchUsers();
  // }, [fetchUsers]);

  if (!recipe) {
    return <p>Chargement de la recette...</p>;
  }

  // const userFisrtName = users.find((u: IUser) => u.id === recipe.user_id);
  // const userLastName = users.find((u: IUser) => u.id === recipe.user_id);

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
      {/* <p>
        Poposé par : {''}
        {userFisrtName?.first_name
          ? userFisrtName?.first_name
          : 'Utilisateur Supprimé'}
      </p> */}

      {/* Ajouter une librairie pour formater la date en quelque chose de plus lisible */}

      {/* <p>
        Mis en ligne le : {recipe.created_at} / Dernière modification le :
        {recipe.updated_at ? recipe.updated_at : recipe.created_at}
      </p> */}
    </>
  );
}
