import './App.css';
import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import RecipesList from './components/RecipesList/RecipesList';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);

  const [error, setError] = useState<null | string>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://orecipesapi.onrender.com/api/recipes');
      console.log(response);

      setRecipes(response.data);

    } catch (e) {
      setError('Problème de chargement des recettes');
    }
  };

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
}

export default App;