import React from 'react';
import Modal from './Modal';

const Recipe = ({title, image, calories, ingredients, show, setShow}) => {

  const ingredientsList = ingredients.map((i, id) => (

      <li>{i.text}</li>

  ))

  return(
    <div className="recipe">
      <h2>{title}</h2>
      <p>Calories: {(Number(calories).toFixed(0))}</p>
      <img src={image} alt={title} />
      <button onClick={e => {setShow(true)}}>Show Ingredients</button>
      <Modal
        show={show}
        setShow={setShow}
      >
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>{ingredientsList}</ul>
      </div>
      </Modal>  
    </div>
  )
}

export default Recipe;
