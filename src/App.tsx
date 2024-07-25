import './App.css';
import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Route, Routes } from 'react-router-dom';
import RecipesList from './components/RecipesList/RecipesList';
<<<<<<< HEAD
import RecipePage from './components/RecipesList/RecipePage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Navbar from './components/Navbar/Navbar';
import axios from 'axios';
import { Recipe } from './@Types/Recipe';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState('Accueil');
=======
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);

  const [error, setError] = useState<null | string>(null);
>>>>>>> 03cad1905c6ce019d4c5195ea585f9d0cb512091

  const fetchData = async () => {
    try {
      const response = await axios.get('https://orecipesapi.onrender.com/api/recipes');
<<<<<<< HEAD
      setRecipes(response.data);
    } catch (error) {
=======
      console.log(response);

      setRecipes(response.data);

    } catch (e) {
>>>>>>> 03cad1905c6ce019d4c5195ea585f9d0cb512091
      setError('Problème de chargement des recettes');
    }
  };

<<<<<<< HEAD
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
        <main>
          <Routes>
            <Route path="/" element={<RecipesList recipes={recipes} />} />
            <Route path="/recipe/:slug" element={<RecipePage allRecipes={recipes} />} />
            <Route path="/error" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    );
=======
  useEffect(
    () => {
      fetchData();
    },
    [],
  );

  return (
    <div>
      <header>ici le logo ... les liens du header</header>
      <RecipesList recipes={recipes} />
    </div>

  );
>>>>>>> 03cad1905c6ce019d4c5195ea585f9d0cb512091
}

export default App;