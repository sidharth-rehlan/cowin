import districtsReducer from "./districts/districtsReducer";
import statesReducer from "./states/stateReducer";
import searchReducer from "./search/searchReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  states: statesReducer,
  districts: districtsReducer,
  search: searchReducer,
});

export default rootReducer;
