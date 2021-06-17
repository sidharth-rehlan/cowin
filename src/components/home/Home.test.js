import { render, screen } from "tests/test-utils";
import Home from "./Home";

describe("Home test cases", () => {
  test("should render nearest vaccination center test", () => {
    render(<Home />);
    const headerElement = screen.getByText(
      /Check your nearest vaccination center and slots availability/i
    );
    // screen.debug();
    expect(headerElement).toBeInTheDocument();
  });
});
