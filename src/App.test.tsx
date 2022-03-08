import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should display the Navbar component with the 5 anchors", () => {
      render(<App />);

      const links = screen.getAllByRole("link");

      expect(links).toHaveLength(5);
    });
  });
});
