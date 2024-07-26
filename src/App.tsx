import './App.css';
import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Route, Routes } from 'react-router-dom';
import RecipesList from './components/RecipesList/RecipesList';
import RecipePage from './components/RecipesList/RecipePage';
import Header from './components/LogInForm/Header';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Navbar from './components/Navbar/Navbar';
import axios from 'axios';
import { Recipe } from './@Types/Recipe';
import { getTokenAndPseudoInLocalStorage } from './localStorage/localStorage';
import FavPage from './components/RecipesList/FavPage';

function App() {

//STATE pour le JWT et après on envoie le ST dans le header (app) comme ça quand il sera connecté il pourra mettre le token dans le state
const [token, setToken] = useState(null);

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState('Accueil');

//State pour stocker l'état de loading de données
const [isLoading, setisLoading] = useState(true);
 
// au rendu de la page, on va chercher dans le localStorage si il y a un token et un pseudo, on les place dans le state
useEffect(() => {
  const tokenAndPSeudo = getTokenAndPseudoInLocalStorage();

  if (tokenAndPSeudo) {
    setToken(tokenAndPSeudo.token);
  }
}, []);


  const fetchData = async () => {
    try {
      const response = await axios.get('https://orecipesapi.onrender.com/api/recipes');
      setRecipes(response.data);
    } catch (error) {
      setError('Problème de chargement des recettes');
    }
    //onarrête le loading si y a une erreur
    setisLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const onItemClick = (name: string) => {
    setActiveItem(name);
  }

  const items = recipes.map(recipe => ({
    slug: recipe.slug,
    name: recipe.title,
    label: recipe.title
  }));


  return (
      <div className="container">
        <aside>
          <Navbar items={items} activeItem={activeItem} onItemClick={onItemClick} />
        </aside>
        <div className="container-column">
        <header>
          <Header setToken={setToken} />
        </header>
        <main>
        {isLoading ? (<p>loading...</p>
           ) : (
           <Routes>
            <Route path="/" element={<RecipesList recipes={recipes} />} />
            <Route path="/fav" element={<FavPage token={token} />} />
            <Route path="/recipe/:slug" element={<RecipePage allRecipes={recipes} />} />
            <Route path="/error" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
           )}
        </main>
      </div>
    </div>
    );
}

export default App;
