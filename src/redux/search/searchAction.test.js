import { addSearchDate } from "./searchActions";
import { ADD_SEARCH_DATE } from "./searchTypes";

describe("search Actions", () => {
  test("it should return ADD_SEARCH_DATE action", () => {
    const expectedAction = {
      type: ADD_SEARCH_DATE,
      payload: "foo",
    };

    expect(addSearchDate("foo")).toEqual(expectedAction);
  });
});
