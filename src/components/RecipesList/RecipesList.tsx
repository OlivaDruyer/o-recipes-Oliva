import React from 'react';
import { Grid, recipe, Image } from 'semantic-ui-react';

function RecipesList() {
  return (
    <Grid>
      <Grid.Row columns={3}>
        {recipes.map((recipe) => (
          <Grid.Column key={id}>
            <recipe
              image={recipe.thumbnail}
              header={recipe.title}
              description={recipe.description}
            />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
}

export default RecipesList;