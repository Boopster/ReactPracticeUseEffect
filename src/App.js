import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './Components/Recipe';

const App = () => {

const [recipes, setRecipes] = useState([]);
const [show, setShow] = useState(false);
const [query, setQuery] = useState("coffee");

const API_ID = "78b702bd";
const API_KEY = "afd2f79a04b1ecad0faad01c7f29539d";
const API_URL = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

useEffect(() => {
  loadData();
}, []);

const loadData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
}

const handleChange = (event) => {
  setQuery(event.target.value);
}

const handleSearch = (event) => {
  event.preventDefault();
  loadData();
}

  return (
    <div className="App">
      <div className="header">
        <div className="about">
          <h1>Recipe Finder</h1>
          <h2>React Practice - Fetch API data using useEffect</h2>
          <a href="https://www.pexels.com/photo/flat-lay-photography-of-variety-of-vegetables-1435904/">Photo by Engin Akyurt from Pexels</a>
        </div>
      </div>
      <div>
      <form onSubmit={handleSearch}>
        <label for="search">Search by ingredient:
          <input type="text" id="search" name="search" onChange={handleChange}/>
        </label>
        {/*<button onClick={handleSearch}>Submit</button>*/}
        <input type="submit" value="Submit"/>
        </form>
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
