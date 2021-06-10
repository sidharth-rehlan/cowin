import {
  FETCH_DISTRICTS_REQUEST,
  FETCH_DISTRICTS_FAILURE,
  FETCH_DISTRICTS_SUCCESS,
} from "./districtsTypes";

const initialState = {
  loading: false,
  districts: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DISTRICTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_DISTRICTS_SUCCESS: {
      return {
        loading: false,
        error: "",
        districts: {
          ...state.districts,
          [action.payload.stateId]: action.payload.districts,
        },
      };
    }
    case FETCH_DISTRICTS_FAILURE: {
      return {
        loading: false,
        districts: { ...state.districts },
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
