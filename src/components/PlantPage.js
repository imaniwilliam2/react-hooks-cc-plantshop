import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchPlant, setSearchPlant] = useState("")


  // Search for Plants
  const filteredPlants = plants.filter(plant => {
    if(searchPlant === "") return true 
    return plant.name.toUpperCase().includes(searchPlant.toUpperCase())
  })

  function updateSearchPlant(e) {
    setSearchPlant(e.target.value)
  }




  // Displaying All Plants
  useEffect(() => {
    fetch(" http://localhost:6001/plants")
    .then(res => res.json())
    .then(plantsData => setPlants(plantsData))
  }, [])




  // Adding Plants to Display and Server 
  function addPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST", 
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(newPlant => setPlants([...plants, newPlant]))
  }


 
  // Delete Plants from Display and Server
  function deletePlant(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
    .then(res => {
      if(res.ok){
        setPlants(plants => plants.filter(plant => {
          return plant.id !== id
        }))
      } else {
        alert("Error unable to delete plant!")
      }
    })
  }


  function updatePlantPrice(formData, id) {

    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(updatedPlant => setPlants(plants => plants.map(plant => {
      if (plant.id === updatedPlant.id){
        return updatedPlant
      } else {
        return plant 
      }
    })))
  }



  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchPlant={searchPlant} updateSearchPlant={updateSearchPlant}/>
      <PlantList plants={filteredPlants} deletePlant={deletePlant} updatePlantPrice={updatePlantPrice}/>
    </main>
  );
}

export default PlantPage;
