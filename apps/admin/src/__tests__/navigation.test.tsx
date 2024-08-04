import React from "react";
import { render, screen } from "@testing-library/react";
import { Navigation } from "@/components/site/navigation";

describe("Navigation", () => {
  it("renders without crashing", () => {
    render(<Navigation />);
  });

  it("renders the logo", () => {
    render(<Navigation />);
    const logoElement = screen.getByAltText("logo");
    expect(logoElement).toBeInTheDocument();
  });

  it("renders the title", () => {
    render(<Navigation />);
    const titleElement = screen.getByText("Ketone.");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the login button", () => {
    render(<Navigation />);
    const loginElement = screen.getByText("Login");
    expect(loginElement).toBeInTheDocument();
  });
});
