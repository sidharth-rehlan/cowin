import { render, screen } from "tests/test-utils";
import userEvent from "@testing-library/user-event";
import SearchByDistrict from "./SearchByDistrict";

describe("SearchByDistrict tests", () => {
  test("should show error on click submit without selecting any state and district", async () => {
    render(<SearchByDistrict />);
    const submitButton = screen.getByRole("button", { name: "Search" });
    userEvent.click(submitButton);

    expect(screen.getByText(/Please enter correct State/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Please enter correct District/i)
    ).toBeInTheDocument();
  });
});
