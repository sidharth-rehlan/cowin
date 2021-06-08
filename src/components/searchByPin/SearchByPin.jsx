import React, { useState, useRef } from "react";
import SearchGrid from "components/searchGrid";
import { isEmpty, isNumber } from "lodash";

function SearchByPin() {
  const [pin, setpin] = useState(null);

  const pinRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const pinCode = parseInt(pinRef.current.value);

    if (isNumber(pinCode) && String(pinCode).length === 6) {
      setpin(pinCode);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="pincode">Pin code</label>
          <input type="tel" name="pincode" id="pincode" ref={pinRef} />
          <input type="submit" value="Search" />
        </form>
      </div>
      {pin && <SearchGrid pin={pin} date={new Date()}></SearchGrid>}
    </>
  );
}

export default SearchByPin;
