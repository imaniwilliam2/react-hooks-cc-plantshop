import React from "react";

function Search({searchPlant, updateSearchPlant}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchPlant}
        onChange={updateSearchPlant}
      />
    </div>
  );
}

export default Search;
