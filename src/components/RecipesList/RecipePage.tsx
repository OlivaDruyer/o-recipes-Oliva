import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import { Recipe } from '../../@Types/Recipe';

interface RecipePageProps {
  allRecipes: Recipe[];
}

function RecipePage({ allRecipes }: RecipePageProps) {
  const { slug } = useParams<{ slug: string }>();

  const recipeToDisplay = allRecipes.find(recipe => recipe.slug === slug);

  if (!recipeToDisplay) {
    return <Navigate to="/error" replace />;
  }

  return (
    <Card>
      <Image src={recipeToDisplay.thumbnail} />
      <Card.Content>
        <Card.Header>{recipeToDisplay.title}</Card.Header>
        <Card.Meta>{recipeToDisplay.author}</Card.Meta>
        <Card.Description>{recipeToDisplay.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {recipeToDisplay.ingredients.length > 0 ? (
          <div>
            <strong>Ingrédients:</strong>
            <ul>
              {recipeToDisplay.ingredients.map(ingredient => (
                <li key={ingredient.id}>
                  {ingredient.quantity} {ingredient.unit} {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>Pas d'ingrédients disponibles</div>
        )}
        {/* Affichage des instructions */}
        {recipeToDisplay.instructions.length > 0 ? (
          <div>
            <strong>Instructions:</strong>
            <ul>
              {recipeToDisplay.instructions.map((instruction, id) => (
                <li key={id}>
                  {instruction} {/* Affichage du texte de l'instruction */}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>Aucune instruction disponible</div>
        )}
      </Card.Content>
    </Card>
  );
};

export default RecipePage;
