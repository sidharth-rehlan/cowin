import React, { useEffect, useCallback, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";

import { fetchStates as fetchStatesAction } from "redux/states/stateActions";
import { fetchDistricts as fetchDistrictsAction } from "redux/districts/districtsActions";
import SearchGrid from "components/searchGrid/SearchGrid";

function SearchByDistrict() {
  const states = useSelector((state) => state.states.states);
  const districts = useSelector((state) => state.districts.districts);

  const dispatch = useDispatch();
  const [enteredStateId, setEnteredStateId] = useState();
  const [enteredDistrictId, setEnteredDistrictId] = useState();

  const districtRef = useRef();

  const fetchState = useCallback(() => {
    if (states.length === 0) {
      dispatch(fetchStatesAction());
    }
  }, [dispatch, states]);

  useEffect(() => {
    fetchState();
  }, [fetchState]);

  const stateChangeHandler = (e) => {
    const stateId = e.target.value;
    setEnteredStateId(stateId);
    if (!districts[stateId]) {
      dispatch(fetchDistrictsAction(stateId));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredDistrictId(districtRef.current.value);
  };

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="state">Select State</label>
          <select name="state" id="state" onChange={stateChangeHandler}>
            <option value="">Select State</option>
            {states.length > 0 &&
              states.map((state) => {
                return (
                  <option key={state.state_id} value={state.state_id}>
                    {state.state_name}
                  </option>
                );
              })}
          </select>
          <label htmlFor="district">District</label>
          <select name="district" id="district" ref={districtRef}>
            <option value="">Select District</option>
            {!isEmpty(districts) &&
              districts[enteredStateId] &&
              districts[enteredStateId].map((district) => {
                return (
                  <option
                    key={district.district_id}
                    value={district.district_id}
                  >
                    {district.district_name}
                  </option>
                );
              })}
          </select>
          <button type="submit">Search</button>
        </form>
      </div>
      {enteredDistrictId && (
        <SearchGrid district={enteredDistrictId} date={new Date()}></SearchGrid>
      )}
    </>
  );
}

export default SearchByDistrict;
