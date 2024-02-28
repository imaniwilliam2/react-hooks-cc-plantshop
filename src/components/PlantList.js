import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, deletePlant, updatePlantPrice}) {

  // console.log(plants)

  return (
    <ul className="cards">
      {plants.map(plant => {
        return <PlantCard key={plant.id} plant={plant} deletePlant={deletePlant} updatePlantPrice={updatePlantPrice}/>
      })}
    </ul>
  );
}

export default PlantList;
