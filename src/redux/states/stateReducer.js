import {
  FETCH_STATES_SUCCESS,
  FETCH_STATES_FAILURE,
  FETCH_STATES_REQUEST,
} from "./stateTypes";

const initialState = {
  loading: false,
  states: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATES_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_STATES_SUCCESS: {
      return {
        loading: false,
        states: action.payload,
        error: "",
      };
    }
    case FETCH_STATES_FAILURE: {
      return {
        loading: false,
        states: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
