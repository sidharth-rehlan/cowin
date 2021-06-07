import React from "react";

function SearchByMap() {
  return (
    <>
      <div>
        <label htmlFor="searchLocation">Search Location for Vaccination</label>
        <input type="text" name="searchLocation" id="searchLocation" />
      </div>
      <div>Map</div>
    </>
  );
}

export default SearchByMap;
