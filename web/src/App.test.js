import { render, screen } from "@testing-library/react";
import App from "./App";

describe("renders the App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should render the Sales table", () => {
    const salesTable = screen.getByText("Sales Orders");
    expect(salesTable).toBeInTheDocument();
  });

  it("should render the Purchase table", () => {
    const purchaseTable = screen.getByText("Purchase Orders");
    expect(purchaseTable).toBeInTheDocument();
  });

  it("should render the Allocate Button", () => {
    const allocateButton = screen.getByTestId("trigger-allocate");
    expect(allocateButton).toBeInTheDocument();
  });
});
