import { useState } from "react";
import React from "react";


function PlantCard({plant}) {

  const [inStock, setInStock] = useState(true)

  function handleInStock() {
    setInStock(!inStock)
  }

  const buttonColor = inStock ? "primary" : ""

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className={buttonColor} onClick={handleInStock}>In Stock</button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
