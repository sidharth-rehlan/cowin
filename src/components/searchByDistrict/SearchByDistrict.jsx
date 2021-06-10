import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStates as fetchStatesAction } from "redux/states/stateActions";
import { fetchDistricts as fetchDistrictsAction } from "redux/states/districtsActions";

function SearchByDistrict() {
  const submitHandler = () => {};
  const states = useSelector((state) => state.states.states);
  const districts = useSelector((state) => state.districts.districts);
  const dispatch = useDispatch();
  const [enteredState, setEnteredState] = useState();

  const fetchState = useCallback(() => {
    if (states.length === 0) {
      dispatch(fetchStatesAction());
    }
  }, [dispatch, states]);

  useEffect(() => {
    fetchState();
  }, [fetchState]);

  const stateChangeHandler = (e) => {
      console.log(e.target.value);
      const stateId = e.target.value;
      if(!districts[stateId]){
        dispatch(fetchDistrictsAction(stateId));
      }
  };

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="state">Select State</label>
          <select name="state" id="state" onChange={}>
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
          <select name="district" id="district">
            <option value="">Select District</option>
            {districts.length > 0 && districts[stateId] &&
              districts[stateId].map((district) => {
                return (
                  <option key={district.district_id} value={district.district_id}>
                    {state.district_name}
                  </option>
                );
              })}
          </select>
        </form>
      </div>
      <div>Grid</div>
    </>
  );
}

export default SearchByDistrict;
