import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import { HomePage } from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should display 5 anchors", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const links = screen.getAllByRole("link");

      expect(links).toHaveLength(5);
    });
  });
});
