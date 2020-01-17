import React from 'react';
import Button from 'react-bootstrap/Button';
const Recipe = ({title, image, url, handleShow}) => {

  return(
    <div className="recipe">
      <h2>{title}</h2>
      {/*<p>Calories: {(Number(calories).toFixed(0))}</p>*/}
      <img src={image} alt={title} />
      <div className="btn-container">
        <Button className="btn" variant="primary" onClick={handleShow}>
          Show Ingredients
        </Button>
        <a href={url}><Button className="btn" variant="secondary">
          Link to recipe on original website
        </Button></a>
      </div>
    </div>
  )
}

export default Recipe;
