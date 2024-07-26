import { Grid, Button } from 'semantic-ui-react';
import { Recipe } from '../../@Types/Recipe';
import { Link } from 'react-router-dom';
import './RecipeCSS.css';



interface RecipesListProps {
  recipes: Recipe[];
}

function RecipesList({recipes}: RecipesListProps) {
  return (
    <Grid>
      <Grid.Row columns={3} >
        {recipes.map((recipe) => (
          <Grid.Column key={recipe.id}>
            <div className="recipe-card">
              <img src={recipe.thumbnail} alt={recipe.title} className="recipe-image" />
              <div className="recipe-content">
                <h2 className="recipe-title">{recipe.title}</h2>
                <ul className="recipe-details">
                  <li>{recipe.description}</li>
                  <li>Difficulté: {recipe.difficulty}</li>
                </ul>
                <Button basic inverted color='pink'>
                <Link to={`/recipe/${recipe.slug}`} className="recipe-link">Voir la recette</Link>
                </Button>
              </div>
            </div>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
);
};


export default RecipesList;

