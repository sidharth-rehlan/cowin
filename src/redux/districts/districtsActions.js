import { fetchDistricts as fetchDistrictsAPI } from "services";
import {
  FETCH_DISTRICTS_SUCCESS,
  FETCH_DISTRICTS_FAILURE,
  FETCH_DISTRICTS_REQUEST,
} from "./districtsTypes";

export const fetchDistricts = (stateId) => {
  return async (dispatch) => {
    try {
      dispatch(fetchDistrictsRequest(s));
      const response = await fetchDistrictsAPI(stateId);
      console.log("state action resonse...", response);
      const districts = response.Districts;
      dispatch(fetchDistrictsSuccess(districts));
    } catch (error) {
      dispatch(fetchDistrictsFailure(error));
    }
  };
};

export const fetchDistrictsRequest = () => {
  return {
    type: FETCH_DISTRICTS_REQUEST,
  };
};

export const fetchDistrictsSuccess = (districts) => {
  return {
    type: FETCH_DISTRICTS_SUCCESS,
    payload: districts,
  };
};

export const fetchDistrictsFailure = (error) => {
  return {
    type: FETCH_DISTRICTS_FAILURE,
    payload: error,
  };
};
