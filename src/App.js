import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './Components/Recipe';


const App = () => {

const API_ID = "78b702bd";
const API_KEY = "afd2f79a04b1ecad0faad01c7f29539d";
let q = "banana";
const API_URL = `https://api.edamam.com/search?q=${q}&app_id=${API_ID}&app_key=${API_KEY}`;

const [recipes, setRecipes] = useState([]);
const [show, setShow] = useState(false);

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
      <div className="header">
        <img src="./favicon-32x32.png"/>
        <h1>Recipe Finder</h1>
        <h2>React Practice - Fetch API data using useEffect</h2>
      </div>
      <div className="container">
        {
          recipes.map((r,id) => (
            <Recipe
              key={id}
              title={r.recipe.label}
              image={r.recipe.image}
              calories={r.recipe.calories}
              ingredients={r.recipe.ingredients}
              show={show}
              setShow={setShow}
            />
          ))
        }
      </div>
    </div>
  )
};

export default App;
