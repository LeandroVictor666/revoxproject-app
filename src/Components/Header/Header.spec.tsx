import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header-Component", () => {
  it("should render header correctly", () => {
    render(<Header />);
    expect(screen.getByText("RevoXProject")).toBeInTheDocument();
  });
});
