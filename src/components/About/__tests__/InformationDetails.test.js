import { render, screen } from "@testing-library/react";
import { InformationDetails } from "../InformationDetails";
describe("about me test", () => {
  describe("check my data", () => {
    it("img should have alt atribute", async () => {
      render(<InformationDetails />);
      const myFirstName = screen.getByRole("img");
      expect(myFirstName.alt).toBe("My profile");
    });
    it("img should have src atribute", async () => {
      render(<InformationDetails />);
      const myFirstName = screen.getByRole("img");
      expect(myFirstName.src).toBe(
        "https://github.com/PiotrSierant/portfolioWeb/blob/master/public/images/profile.jpg?raw=true"
      );
    });
    it("should render a my name", async () => {
      render(<InformationDetails />);
      const myFirstName = screen.getByRole("heading");
      expect(myFirstName.textContent).toBe("Piotr Sierant");
    });
  });
});
