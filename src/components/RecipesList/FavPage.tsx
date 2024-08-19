import axios from "axios";
import { useEffect, useState } from "react";
import { Recipe } from '../../@Types/Recipe';

interface FavRecipesProps {
    token: string | null;
}

function FavPage({ token }: FavRecipesProps) {
    // STATE pour stocker les recettes préférées
    const [favRecipes, setFavRecipes] = useState<Recipe[]>([]);

    // fetch les recettes préférées
    const fetchFavRecipes = async () => {
        try {
            // On doit envoyer le token dans l'entête de la requête GET vers /favorites
            // Le token est dans le state d'App, il va l'envoyer via une prop
            // et on pourra le rajouter aux entêtes
            const response = await axios.get(
                "https://orecipesapi.onrender.com/api/favorites",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response);

            setFavRecipes(response.data.favorites);
        } catch (error) {
            console.error("Erreur lors de la récupération des recettes préférées", error);
        }
    };

    useEffect(() => {
        fetchFavRecipes();
    }, []);

    return (
        <div>
            <h1>Recettes préférées--en cours de construction--</h1>
            <ul>
                {favRecipes.map((recipe) => (
                    <li key={recipe.id}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default FavPage;