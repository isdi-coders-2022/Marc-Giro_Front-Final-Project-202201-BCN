import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PaginationButton from "./PaginationButton";

describe("Given a FormButton component", () => {
  describe("When it receives an action and the button is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(<PaginationButton actionOnClick={action} text="text" />);

      userEvent.click(screen.getByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });
});
