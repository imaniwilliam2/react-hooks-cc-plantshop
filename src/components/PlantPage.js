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





  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchPlant={searchPlant} updateSearchPlant={updateSearchPlant}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
