import React from 'react';

const Recipe = ({title, image, setShow}) => {

  return(
    <div className="recipe">
      <h2>{title}</h2>
      {/*<p>Calories: {(Number(calories).toFixed(0))}</p>*/}
      <img src={image} alt={title} />
      <button onClick={e => {setShow(true)}}>Show Ingredients</button>
    </div>
  )
}

export default Recipe;
