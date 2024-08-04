import "@testing-library/jest-dom";
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

  it("renders the links", () => {
    render(<Navigation />);
    const pricingElement = screen.getByText("Pricing");
    const aboutElement = screen.getByText("About");
    const documentationElement = screen.getByText("Documentation");
    const featuresElement = screen.getByText("Features");

    expect(pricingElement).toBeInTheDocument();
    expect(aboutElement).toBeInTheDocument();
    expect(documentationElement).toBeInTheDocument();
    expect(featuresElement).toBeInTheDocument();
  });

  it("renders the login button", () => {
    render(<Navigation />);
    const loginElement = screen.getByText("Login");
    expect(loginElement).toBeInTheDocument();
  });
});
