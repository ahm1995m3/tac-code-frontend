import { screen, getAllByAltText } from "@testing-library/react";

import App from "../pages/index";

import { renderWithClient } from "./utils";

describe("Testing the home page", async () => {
  test("successful query component", async () => {
    const result = renderWithClient(<App />);

    expect(await result.findByText(/The Fake Blog/i)).toBeInTheDocument();

    expect(await result.getAllByText(/Read More/i)).toHaveLength(5);
  });
});
