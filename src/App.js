import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

const API_ID = "78b702bd";
const API_KEY = "afd2f79a04b1ecad0faad01c7f29539d";
const API_URL = `https://api.edamam.com/search?q=banana&app_id=${API_ID}&app_key=${API_KEY}`;

const [recipes, setRecipes] = useState([]);

useEffect(() => {
  loadData();
}, []);

const loadData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
}

  return (
    <div className="App">
      {
        recipes.map((r,id) => (
          <Recipe
            key={id}
            title={r.recipe.label}
            image={r.recipe.image}
            calories={r.recipe.calories}
          />
        ))
      }
    </div>
  )
};

export default App;
