import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import UpdateMoviePage from "./UpdateMoviePage";

describe("Given an UpdateMoviePage component", () => {
  describe("When the page is rendered", () => {
    test("Then a heading should be rendered", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UpdateMoviePage />
          </Provider>
        </BrowserRouter>
      );
      const title = screen.getByRole("heading", { name: "Update your Movie" });
      expect(title).toBeInTheDocument();
    });
  });
});
