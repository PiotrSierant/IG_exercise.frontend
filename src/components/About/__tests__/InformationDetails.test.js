import { render, screen } from "@testing-library/react";
import { InformationDetails } from "../InformationDetails";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

describe("about me test", () => {
  describe("check my data", () => {
    it("img should have alt atribute", async () => {
      render(<InformationDetails />);
      const altAtribute = screen.getByRole("img");
      expect(altAtribute.alt).toBe("My profile");
    });
    it("img should have src atribute", async () => {
      render(<InformationDetails />);
      const srcAtribute = screen.getByRole("img");
      expect(srcAtribute.src).toBe(
        "https://github.com/PiotrSierant/portfolioWeb/blob/master/public/images/profile.jpg?raw=true"
      );
    });
    it("should render a my name", async () => {
      render(<InformationDetails />);
      const myName = screen.getByRole("heading");
      expect(myName.textContent).toBe("Piotr Sierant");
    });
  });
  describe("check links", () => {
    it("should render a link", async () => {
      render(<InformationDetails />);
      const firstLink = screen.getByRole("link", { name: "Portfolio" });
      expect(firstLink.href).toBe(
        "https://piotrsierant.github.io/portfolioWeb/"
      );
    });
    it("the link should have the text Portfolio", async () => {
      render(<InformationDetails />);
      const firstLink = screen.getByRole("link", { name: "Portfolio" });
      expect(firstLink.textContent).toBe("Portfolio");
    });
    it("the link should have the href attribute https://twitter.com/piotr_sierant96", async () => {
      render(<InformationDetails />);
      const twitterLink = screen.getByTitle("twitter");
      expect(twitterLink.href).toBe("https://twitter.com/piotr_sierant96");
    });
    it("the link should have the href attribute https://www.instagram.com/dzd07/", async () => {
      render(<InformationDetails />);
      const twitterLink = screen.getByTitle("instagram");
      expect(twitterLink.href).toBe("https://www.instagram.com/dzd07/");
    });
    it("the link should have the href attribute https://www.linkedin.com/in/piotr-sierant/", async () => {
      render(<InformationDetails />);
      const twitterLink = screen.getByTitle("linkedIn");
      expect(twitterLink.href).toBe(
        "https://www.linkedin.com/in/piotr-sierant/"
      );
    });
    it("the link should have the href attribute https://github.com/PiotrSierant", async () => {
      render(<InformationDetails />);
      const twitterLink = screen.getByTitle("github");
      expect(twitterLink.href).toBe("https://github.com/PiotrSierant");
    });
  });
});
