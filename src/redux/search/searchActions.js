import { ADD_SEARCH_DATE } from "./searchTypes";

export const addSearchDate = (states) => {
  return {
    type: ADD_SEARCH_DATE,
    payload: states,
  };
};
