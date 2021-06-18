import {
  FETCH_DISTRICTS_SUCCESS,
  FETCH_DISTRICTS_REQUEST,
} from "./districtsTypes";

import { fetchDistricts, fetchDistrictsRequest } from "./districtsActions";
import configureMockStore from "redux-mock-store";
import mockResponse from "tests/mockData/districts";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const stateId = 12;

describe("district Actions Tests", () => {
  test("it should return FETCH_DISTRICTS_REQUEST action", () => {
    const exprectedResult = {
      type: FETCH_DISTRICTS_REQUEST,
    };
    expect(fetchDistrictsRequest()).toEqual(exprectedResult);
  });

  test("should create FETCH_DISTRICTS_SUCCESS when fetching districts has been done", () => {
    const expectedActions = [
      { type: FETCH_DISTRICTS_REQUEST },
      {
        type: FETCH_DISTRICTS_SUCCESS,
        payload: { stateId: stateId, districts: mockResponse.districts },
      },
    ];
    const store = mockStore({ districts: {} });

    return store.dispatch(fetchDistricts(stateId)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
