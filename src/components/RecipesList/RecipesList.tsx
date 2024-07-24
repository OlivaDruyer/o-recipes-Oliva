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

/* <Grid.Column>
          <recipe
            image="/src/assets/macaron-framboise-1-416x277.jpg"
            header="Macaron framboisier"
            description="Difficulté: Difficile"
          />
        </Grid.Column>
        <Grid.Column>
          <recipe
            image="/src/assets/tarte-citron-meringuee.jpg"
            header="Tarte au citron meringuée"
            description="Difficulté: Moyenne"
          />
        </Grid.Column> */