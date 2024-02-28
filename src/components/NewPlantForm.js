import React from "react";
import { useState } from "react";

function NewPlantForm({addPlant}) {

  const [plantForm, setPlantForm] = useState({
    name: "",
    image: "",
    price: ""
  })

  function updatePlantForm(e) {
    setPlantForm({...plantForm, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()

    addPlant(plantForm)

    setPlantForm({
    name: "",
    image: "",
    price: ""
    })
  }




  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={updatePlantForm} type="text" name="name" placeholder="Plant name" value={plantForm.name}/>
        <input onChange={updatePlantForm}  type="text" name="image" placeholder="Image URL" value={plantForm.image}/>
        <input onChange={updatePlantForm}  type="number" name="price" step="0.01" placeholder="Price" value={plantForm.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
