import React from "react";

function SearchByDistrict() {
  return (
    <>
      <div>
        <form action="">
          <label htmlFor="state">Select State</label>
          <input type="text" name="state" id="state" />
          <label htmlFor="district">District</label>
          <input type="text" name="district" id="district" />
        </form>
      </div>
      <div>Grid</div>
    </>
  );
}

export default SearchByDistrict;
