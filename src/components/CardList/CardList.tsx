import { Card } from 'semantic-ui-react';

function CardList() {
  return (
    <div>
      <Card
        image="/src/assets/cookies-beurre-cacahouettes-sans-gluten-680x451.jpg"
        href="#card-example-link-card"
        header="Cookies au beurre de cacahuètes"
        description="Diffictulté: Facile"
      />
      <Card
        image="/src/assets/macaron-framboise-1-416x277.jpg"
        href="#card-example-link-card"
        header="Macaron framboisier"
        description="Difficulté: Difficile"
      />
    </div>
  );
}

export default CardList;
