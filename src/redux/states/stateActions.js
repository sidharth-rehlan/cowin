import { fetchStates as fetchStateAPI } from "services";
import {
  FETCH_STATES_FAILURE,
  FETCH_STATES_REQUEST,
  FETCH_STATES_SUCCESS,
} from "./stateTypes";

export const fetchStates = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchStatesRequest());
      const response = await fetchStateAPI();
      const states = response.states;
      dispatch(fetchStatesSuccess(states));
    } catch (error) {
      dispatch(fetchStatesFailure(error));
    }
  };
};

export const fetchStatesRequest = () => {
  return {
    type: FETCH_STATES_REQUEST,
  };
};

export const fetchStatesSuccess = (states) => {
  return {
    type: FETCH_STATES_SUCCESS,
    payload: states,
  };
};

export const fetchStatesFailure = (error) => {
  return {
    type: FETCH_STATES_FAILURE,
    payload: error,
  };
};
