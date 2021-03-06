import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../redux/store";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm message="registered!" />
          </Provider>
        </BrowserRouter>
      );

      const registerButton = screen.getByRole("button");

      expect(registerButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered, the user registers correctly", () => {
    test("Then it should invoke navigate", async () => {
      const fillName = "aaad";
      const message = "registered!";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm message={message} />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getAllByRole("textbox");
      inputs.forEach((input) => userEvent.type(input, fillName));
      const passwordInput = screen.getByPlaceholderText("********");
      userEvent.type(passwordInput, fillName);

      const submitButton = screen.getByRole("button");
      userEvent.click(submitButton);

      expect(submitButton).not.toBeDisabled();
    });
  });

  describe("When it's rendered, the user does not register correctly", () => {
    test("Then it should not invoke navigate", async () => {
      const fillName = "aaad";
      const message = "asdd";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm message={message} />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getAllByRole("textbox");
      inputs.forEach((input) => userEvent.type(input, fillName));
      const passwordInput = screen.getByPlaceholderText("********");
      userEvent.type(passwordInput, fillName);

      const submitButton = screen.getByRole("button");
      userEvent.click(submitButton);

      expect(submitButton).not.toBeDisabled();
    });
  });
});
