import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should display 5 anchors", () => {
      render(<Navbar />);

      const links = screen.getAllByRole("link");

      expect(links).toHaveLength(5);
    });
  });
});
