import { render, screen } from "@testing-library/react";
import { Navbar } from "../Navbar";
import { BrowserRouter } from "react-router-dom";

const MockNavbar = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

describe("navigation test", () => {
  describe("check if the given names are in the navigation", () => {
    it("should render a link element called Home", async () => {
      render(<MockNavbar />);
      const navigationElement = screen.getByTestId("home");
      expect(navigationElement.textContent).toBe("Home");
    });
    it("should render a link element called About", async () => {
      render(<MockNavbar />);
      const navigationElement = screen.getByTestId("about");
      expect(navigationElement.textContent).toBe("About");
    });
  });
  describe("check if the given names are in the navigation", () => {
    it('should render a link element called Home to have atribute href "/"', async () => {
      render(<MockNavbar />);
      const navigationElement = screen.getByTestId("home").parentElement;
      expect(navigationElement.href).toBe("http://localhost/");
    });
    it('should render a link element called About to have atribute href "/about"', async () => {
      render(<MockNavbar />);
      const navigationElement = screen.getByTestId("about").parentElement;
      expect(navigationElement.href).toBe("http://localhost/about");
    });
  });
});
