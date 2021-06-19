import { render, screen } from "tests/test-utils";
import userEvent from "@testing-library/user-event";

import SearchByPin from "./SearchByPin";

describe("SearchByPin tests", () => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();

  test("should show error on entering pin code of more than 6 character", async () => {
    render(<SearchByPin />);
    const pinCodeTextField = screen.getByRole("textbox");
    userEvent.type(pinCodeTextField, "1234567890");
    expect(
      await screen.findByText(/Please enter correct Pin/i)
    ).toBeInTheDocument();
  });

  test("should show list of centers on entering correct pin code", async () => {
    render(<SearchByPin />);
    const pinCodeTextField = screen.getByRole("textbox");
    userEvent.type(pinCodeTextField, "160036");
    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);
    const centerElements = await screen.findAllByText(/HWC Sector 42 PHC/i);
    expect(centerElements).toHaveLength(6);
  });

  test("should show - No vaccine available if paid filter is selected", async () => {
    render(<SearchByPin />);
    const pinCodeTextField = screen.getByRole("textbox");
    userEvent.type(pinCodeTextField, "160036");
    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);
    const centerElements = await screen.findAllByText(/HWC Sector 42 PHC/i);
    const paidCheckbox = await screen.findByRole("checkbox", { name: /Paid/i });
    userEvent.click(paidCheckbox);
    expect(
      screen.getByText(/No Vaccination center is available for booking./i)
    ).toBeInTheDocument();

    // const maxLengthToPrint = 100000;
    // screen.debug(centerElement, maxLengthToPrint);
  });
});
