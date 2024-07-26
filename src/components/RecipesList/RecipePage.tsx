import { useParams, Navigate } from 'react-router-dom';
import { Recipe } from '../../@Types/Recipe';
import './RecipeCSS.css';

interface RecipePageProps {
  allRecipes: Recipe[];
}

function RecipePage({ allRecipes }: RecipePageProps) {
  const { slug } = useParams<{ slug: string }>();

  const recipeToDisplay = allRecipes.find(recipe => recipe.slug === slug);

 //Effect pour le scroll à 0 (dans le composant concerné) - ou dans APP en passant par const{pathname}=useLocation()
  //window.scrollTo(0,0) - scroll en haut de page à chaque re-rendu
// useEffect(() => {
// window.scrollTo(0,0);
// });


  if (!recipeToDisplay) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="card custom-card">
    <div className="card-image">
        <img src={recipeToDisplay.thumbnail} alt={recipeToDisplay.title} />
    </div>
    <div className="card-content">
        <h2 className="card-header">{recipeToDisplay.title}</h2>
        <p className="card-description">{recipeToDisplay.description}</p>
    </div>
    <div className="card-extra">
        {recipeToDisplay.ingredients.length > 0 ? (
            <div className="card-section">
                <strong>Ingrédients:</strong>
                <ul className="ingredients-list">
                    {recipeToDisplay.ingredients.map(ingredient => (
                        <li key={ingredient.id}>
                            {ingredient.quantity} {ingredient.unit} {ingredient.name}
                        </li>
                    ))}
                </ul>
            </div>
        ) : (
            <div className="card-section">Pas d'ingrédients disponibles</div>
        )}
        {recipeToDisplay.instructions.length > 0 ? (
            <div className="card-section">
                <strong>Instructions:</strong>
                <ul className="instructions-list">
                    {recipeToDisplay.instructions.map((instruction, id) => (
                        <li key={id}>
                            {instruction}
                        </li>
                    ))}
                </ul>
            </div>
        ) : (
            <div className="card-section">Aucune instruction disponible</div>
        )}
    </div>
</div>
)}

export default RecipePage;
