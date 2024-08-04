import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../app/index";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders CounterButton", () => {
    render(<App />);
    const counterButtonElement = screen.getByRole("button");
    expect(counterButtonElement).toBeInTheDocument();
  });

  it("renders the Turborepo link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Turborepo/);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders the Vite link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Vite/);
    expect(linkElement).toBeInTheDocument();
  });
});
