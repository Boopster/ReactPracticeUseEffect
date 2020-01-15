import React from 'react';

const Recipe = ({title, image, calories, ingredients}) => {

  const ingredientsList = ingredients.map((i, id) => (

      <li>{i.text}</li>

  ))

  return(
    <div className="recipe">
      <h2>{title}</h2>
      <p>Calories: {(Number(calories).toFixed(0))}</p>
      <img src={image} alt={title} />
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>{ingredientsList}</ul>
      </div>
    </div>
  )
}

export default Recipe;
