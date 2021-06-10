import districtsReducer from "./districts/districtsReducer";
import statesReducer from "./states/stateReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  states: statesReducer,
  districts: districtsReducer,
});

export default rootReducer;
