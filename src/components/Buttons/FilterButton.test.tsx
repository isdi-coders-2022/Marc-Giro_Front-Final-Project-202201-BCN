import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterButton from "./FilterButton";

describe("Given a FilterButton component", () => {
  describe("When it receives an action and the button is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(<FilterButton actionOnClick={action} text="text" />);

      userEvent.click(screen.getByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });
});
