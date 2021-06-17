import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { isNumber } from "lodash";
import moment from "moment";
import SearchGrid from "components/searchGrid";
import lang from "configs/lang.config";
import { addSearchDate } from "redux/search/searchActions";

import "./style.scss";

function SearchByPin() {
  const [pin, setPin] = useState();
  const [error, setError] = useState(null);
  const pinRef = useRef();
  const dispatch = useDispatch();
  const onChangePin = (e) => {
    const enteredValue = parseInt(e.target.value);
    if (!isNumber(enteredValue) || String(enteredValue).length > 6) {
      setError(lang.pinError);
    } else {
      setError(null);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const pinCode = parseInt(pinRef.current.value);

    if (isNumber(pinCode) && String(pinCode).length === 6) {
      setPin(pinCode);
      const formattedCurrentDate = moment(new Date()).format("DD-MM-YYYY");
      dispatch(addSearchDate(formattedCurrentDate));
    } else {
      setError(lang.pinError);
    }
  };

  return (
    <>
      <div className="row">
        <form className="searchByPin-form" onSubmit={submitHandler}>
          <div className="searchByPin-formControl">
            <input
              className="cowin-field"
              type="tel"
              name="pincode"
              id="pincode"
              placeholder="Enter you Pin"
              ref={pinRef}
              onChange={onChangePin}
            />
            {error && <p className="cowin-field-error">{error}</p>}
          </div>
          <div>
            <input className="cowin-btn" type="submit" value="Search" />
          </div>
        </form>
      </div>
      {pin && <SearchGrid pin={pin} />}
    </>
  );
}

export default SearchByPin;
