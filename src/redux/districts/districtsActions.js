import { fetchDistricts as fetchDistrictsAPI } from "services";
import {
  FETCH_DISTRICTS_SUCCESS,
  FETCH_DISTRICTS_FAILURE,
  FETCH_DISTRICTS_REQUEST,
} from "./districtsTypes";

export const fetchDistricts = (stateId) => {
  return async (dispatch) => {
    try {
      dispatch(fetchDistrictsRequest());
      const response = await fetchDistrictsAPI(stateId);
      const districts = response.districts;
      dispatch(fetchDistrictsSuccess(stateId, districts));
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

export const fetchDistrictsSuccess = (stateId, districts) => {
  return {
    type: FETCH_DISTRICTS_SUCCESS,
    payload: { stateId: stateId, districts: districts },
  };
};

export const fetchDistrictsFailure = (error) => {
  return {
    type: FETCH_DISTRICTS_FAILURE,
    payload: error,
  };
};
