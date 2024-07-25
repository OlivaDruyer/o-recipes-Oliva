import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';
import { Recipe } from '../../@Types/Recipe';
import { Link } from 'react-router-dom';
import App from './App';

interface RecipesListProps {
  recipes: Recipe[];
}

function RecipesList({recipes}: RecipesListProps) {
  return (
    <Grid>
    <Grid.Row columns={3}>
      {recipes.map((recipe) => (
        <Grid.Column key={recipe.id}>
          <Card>
            <Image src={recipe.thumbnail}/>
             <Card.Content>
              <Card.Header>{recipe.title}</Card.Header>
              <Card.Description>{recipe.description}</Card.Description>
              <Card.Description>{recipe.difficulty}</Card.Description>
            </Card.Content>
              <Card.Content extra>
              <Link to={`/recipe/${recipe.slug}`}>Voir la recette</Link>
              </Card.Content>
          </Card> 
        </Grid.Column>
      ))}
    </Grid.Row>
  </Grid>
);
};


export default RecipesList;

