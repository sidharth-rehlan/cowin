import { ADD_SEARCH_DATE } from "./searchTypes";

const initialState = {
  searchDate: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH_DATE: {
      return {
        ...state,
        searchDate: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
