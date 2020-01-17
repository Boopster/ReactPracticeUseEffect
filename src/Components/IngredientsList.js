import React from 'react';

const IngredientsList = ({ingredients}) => {

  const ingredientsList = ingredients.map((i, id) => (
      <li>{i.text}</li>
  ))

  return(
    <ul>{ingredientsList}</ul>
  )

}

export default IngredientsList;
