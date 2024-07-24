import { Card } from 'semantic-ui-react';

function Recipe() {
    
  return(
    <Card
      image={image}
      href="#card-example-link-card"
      header={header}
      description={description}
    />
  );
}

export default Recipe;