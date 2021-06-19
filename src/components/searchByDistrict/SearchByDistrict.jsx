import React, { useEffect, useCallback, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import SearchGrid from "components/searchGrid";
import { isEmpty } from "lodash";
import lang from "configs/lang.config";
import { fetchStates as fetchStatesAction } from "redux/states/stateActions";
import { fetchDistricts as fetchDistrictsAction } from "redux/districts/districtsActions";
import { addSearchDate } from "redux/search/searchActions";
import "./style.scss";

function SearchByDistrict() {
  const states = useSelector((state) => state.states.states);
  const districts = useSelector((state) => state.districts.districts);
  const [stateError, setStateError] = useState(null);
  const [districtError, setDistrictError] = useState(null);

  const dispatch = useDispatch();
  const [enteredStateId, setEnteredStateId] = useState();
  const [districtId, setDistrictId] = useState();

  const districtRef = useRef();
  const stateRef = useRef();

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
    if (stateId !== "") {
      setStateError(null);
    }
    setEnteredStateId(stateId);
    if (!districts[stateId]) {
      dispatch(fetchDistrictsAction(stateId));
    }
  };

  const districtChangeHandler = (e) => {
    const districtId = e.target.value;
    if (districtId !== "") {
      setDistrictError(null);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (districtRef.current.value === "" || stateRef.current.value === "") {
      districtRef.current.value === "" &&
        setDistrictError(lang.districtFieldError);
      stateRef.current.value === "" && setStateError(lang.stateFieldError);
    } else {
      setDistrictId(districtRef.current.value);
      const formattedCurrentDate = moment(new Date()).format("DD-MM-YYYY");
      dispatch(addSearchDate(formattedCurrentDate));
    }
  };

  return (
    <>
      <div className="searchByDistrict">
        <form className="searchByDistrict-form" onSubmit={submitHandler}>
          <div className="seachByDistrict-formControl">
            <select
              name="state"
              id="state"
              onChange={stateChangeHandler}
              ref={stateRef}
              data-testid="state-selector"
            >
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
            {stateError && <p className="cowin-field-error">{stateError}</p>}
          </div>
          <div className="seachByDistrict-formControl">
            <select
              name="district"
              id="district"
              ref={districtRef}
              onChange={districtChangeHandler}
              data-testid="district-selector"
            >
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
            {districtError && (
              <p className="cowin-field-error">{districtError}</p>
            )}
          </div>
          <div className="seachByDistrict-form-button">
            <button className="cowin-btn" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      {districtId && <SearchGrid district={districtId}></SearchGrid>}
    </>
  );
}

export default SearchByDistrict;
