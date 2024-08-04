import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/site/page";

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });

  it("renders the tagline", () => {
    render(<Home />);
    const taglineElement = screen.getByText("Run your agency, in one place");
    expect(taglineElement).toBeInTheDocument();
  });

  it("renders the title", () => {
    render(<Home />);
    const titleElement = screen.getByRole("heading", { name: "Ketone" });
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the banner image", () => {
    render(<Home />);
    const imageElement = screen.getByAltText("banner image");
    expect(imageElement).toBeInTheDocument();
  });
});
