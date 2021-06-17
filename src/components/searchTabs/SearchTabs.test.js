import { render, screen } from "tests/test-utils";
import SearchTabs from "./SearchTabs";

describe("SearchTabs tests", () => {
  test("should render 3 buttons", () => {
    render(<SearchTabs />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });

  test("should render Search by pin button", () => {
    render(<SearchTabs />);
    const searchByPinButton = screen.getByRole("button", {
      name: /search by pin/i,
    });

    expect(searchByPinButton).toBeInTheDocument();
  });
});
