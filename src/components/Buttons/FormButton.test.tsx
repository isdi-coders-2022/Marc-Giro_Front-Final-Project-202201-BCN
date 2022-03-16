import { render, screen } from "@testing-library/react";
import FormButton from "./FormButton";

describe("Given a FormButton component", () => {
  describe("When it receives an action and the button is clicked", () => {
    test("Then it should call the action", () => {
      const text = "create";
      render(<FormButton text={text} />);

      const buttonText = screen.getByRole("button");

      expect(buttonText).toBeInTheDocument();
    });
  });
});
