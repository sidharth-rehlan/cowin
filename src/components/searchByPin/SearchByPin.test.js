import { render, screen } from "tests/test-utils";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import moment from "moment";
import mockResponse from "tests/mockData/centers";
import { APIConfig } from "configs/config";

import SearchByPin from "./SearchByPin";

describe("SearchByPin tests", () => {
  const server = setupServer(
    rest.get(
      `${APIConfig.baseUrl}${APIConfig.searchByPin}`,
      (req, res, ctx) => {
        const query = req.url.searchParams;
        const pincode = query.get("pincode");
        const date = query.get("date");

        if (date === moment(new Date()).format("DD-MM-YYYY")) {
          return res(ctx.json(mockResponse));
        }
      }
    )
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

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

    // const maxLengthToPrint = 100000;
    // screen.debug(centerElement, maxLengthToPrint);
  });
});
