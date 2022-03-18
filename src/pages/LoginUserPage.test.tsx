import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import { LoginUserPage } from "./LoginUserPage";

describe("Given a LoginUserPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should display a title", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginUserPage />
          </Provider>
        </BrowserRouter>
      );

      const title = screen.getByRole("heading");

      expect(title).toBeInTheDocument();
    });
  });
});
