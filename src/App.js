import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipe from './Components/Recipe';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import IngredientsList from './Components/IngredientsList';

const App = () => {

const [recipes, setRecipes] = useState([]);
const [show, setShow] = useState(false);
const [query, setQuery] = useState("coffee");
const [mealType, setMealType] = useState("");

const API_ID = "78b702bd";
const API_KEY = "afd2f79a04b1ecad0faad01c7f29539d";
const API_URL_QUERY = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

useEffect(() => {
  loadData();
}, []);

const loadData = async () => {
  const response = await fetch(API_URL_QUERY);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
}

const handleChange = (event) => {
  setQuery(event.target.value);
}

const handleSearchIngredient = (event) => {
  event.preventDefault();
  loadData();
}

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <div className="App">
      <div className="header">
        <div className="about">
          <h1>Recipe Finder</h1>
          <h3>React Practice - Fetch API data using useEffect()</h3>
          <a href="https://www.pexels.com/photo/flat-lay-photography-of-variety-of-vegetables-1435904/">Photo by Engin Akyurt from Pexels</a>
        </div>
      </div>
      <div className="search">
      <form onSubmit={handleSearchIngredient}>
        <label for="searchIngredient">Search by ingredient: </label>
          <input
            type="text"
            id="searchIngredient"
            name="searchIngredient"
            onChange={handleChange}/>
        <input id="submit" type="submit" value="Submit"/>
        </form>
      </div>
      <div className="main-container">
        {
          recipes.map((r,id) => (
            <Recipe
              key={id}
              title={r.recipe.label}
              image={r.recipe.image}
              setShow={setShow}
            />
          ))
        }
      </div>
      {
        recipes.map((r,id) => (
          <>
          <Button variant="primary" onClick={handleShow}>
            Show Ingredients
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Ingredients List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <IngredientsList
                ingredients={r.recipe.ingredients}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          </>
        ))
      }
    </div>
  )
};

export default App;
