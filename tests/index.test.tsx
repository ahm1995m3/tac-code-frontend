import { render, screen, getAllByAltText } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "../pages/index";
const queryClient = new QueryClient();
describe("Should render the home page without crashing", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("Renders the home page", () => {
    render(
      <>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </>
    );

    jest.advanceTimersByTime(3000);

    screen.debug();
  });
});
