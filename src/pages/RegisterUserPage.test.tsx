import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import { RegisterUserPage } from "./RegisterUserPage";

describe("Given a RegisterUserPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should display a title", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterUserPage />
          </Provider>
        </BrowserRouter>
      );

      const title = screen.getByRole("heading");

      expect(title).toBeInTheDocument();
    });
  });
});
