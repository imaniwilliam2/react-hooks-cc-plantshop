import { useState } from "react";
import React from "react";


function PlantCard({plant, deletePlant, updatePlantPrice}) {

  const [inStock, setInStock] = useState(true)
  const [updatedPrice, setUpdatedPrice] = useState("")

  function handleInStock() {
    setInStock(!inStock)
  }

  const buttonColor = inStock ? "primary" : ""


  function handleDelete() {
    deletePlant(plant.id)
  }


  function handlePriceChange(e){
    setUpdatedPrice(e.target.value)
  }

  function handleChange(e) {
    e.preventDefault()
    updatePlantPrice({price: updatedPrice}, plant.id)
  }

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
      <button onClick={handleDelete}>Buy Plant</button>

      <form onSubmit={handleChange}>
        <input onChange={handlePriceChange} type="text" name="price" placeholder="New Price" value={updatedPrice}/>
        <button type="submit">Update Plant Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
