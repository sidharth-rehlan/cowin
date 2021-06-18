import { render, screen } from "tests/test-utils";
import userEvent from "@testing-library/user-event";
import SearchByDistrict from "./SearchByDistrict";

describe("SearchByDistrict tests", () => {
  test("should show error on click submit without selecting any state and district", async () => {
    render(<SearchByDistrict />);
    screen.debug();
    const stateField = screen.getByRole("combobox", { name: "state" });
    const districtField = screen.getByRole("combobox", { name: "district" });
    const submitButton = screen.getByRole("button", { name: "Search" });
    userEvent.click(submitButton);

    expect(
      await screen.findByText(/Please enter correct State/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Please enter correct District/i)
    ).toBeInTheDocument();
  });
});
