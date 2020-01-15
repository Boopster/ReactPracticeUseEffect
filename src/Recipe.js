import React from 'react';

const Recipe = ({title, image, calories}) => {
  return(
    <div className="recipe">
      <h2>{title}</h2>
      <p>Calories: {calories}</p>
      <img src={image} alt={title} />
    </div>
  )
}

export default Recipe;
