import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom/vitest'
import Home from "../app/page";
import Hero from "../components/ui/Hero";
import CounterStat from "../components/ui/CounterStat";

//bypasses "not a function error" when you run tests
vi.mock("next/font/google", () => ({
  Lato: () => ({
    className: "mocked-lato-font",
  }),
}));

describe("The Home component", () => {

  it("renders the basic structure of the home component", () => {
    render(<Home />);
    // Test imported components
    const heroSection = screen.getByRole("main");
    expect(heroSection).toBeInTheDocument();  
  });

  it("Should render the Hero component", () => {
    render(<Hero/>)
  });

  it("Should render the CounterStat component", () => {
    render(<CounterStat/>)
  })

});
