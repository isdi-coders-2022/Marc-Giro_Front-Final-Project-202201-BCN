import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../redux/store";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const loginButton = screen.getByRole("button");

      expect(loginButton).toBeInTheDocument();
    });
  });

  describe("When the inputs are filled, the component receives the right message and the user clicks the button", () => {
    test("Then it should render a button", () => {
      const fillName = "aaad";
      const message = "successful";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm message={message} />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getByRole("textbox");
      userEvent.type(inputs, fillName);
      const passwordInput = screen.getByPlaceholderText("********");
      userEvent.type(passwordInput, fillName);

      const loginButton = screen.getByRole("button");
      userEvent.click(loginButton);

      expect(loginButton).toBeInTheDocument();
    });
  });

  describe("When the inputs are filled, the loginForm receives the wrong message and the user clicks the button", () => {
    test("Then it should render a button", () => {
      const fillName = "aaad";
      const message = ";kladf";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm message={message} />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getByRole("textbox");
      userEvent.type(inputs, fillName);
      const passwordInput = screen.getByPlaceholderText("********");
      userEvent.type(passwordInput, fillName);

      const loginButton = screen.getByRole("button");
      userEvent.click(loginButton);

      expect(loginButton).toBeInTheDocument();
    });
  });
});
