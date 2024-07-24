import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

function RecipesList() {
  return (
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Card
            image="/src/assets/cookies-beurre-cacahouettes-sans-gluten-680x451.jpg"
            header="Cookies au beurre de cacahuètes"
            description="Difficulté: Facile"
          />
        </Grid.Column>
        <Grid.Column>
          <Card
            image="/src/assets/macaron-framboise-1-416x277.jpg"
            header="Macaron framboisier"
            description="Difficulté: Difficile"
          />
        </Grid.Column>
        <Grid.Column>
          <Card
            image="/src/assets/tarte-citron-meringuee.jpg"
            header="Tarte au citron meringuée"
            description="Difficulté: Moyenne"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default RecipesList;
