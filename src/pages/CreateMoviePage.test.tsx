import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import { CreateMoviePage } from "./CreateMoviePage";

describe("Given a CreateMoviePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should display a title", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateMoviePage />
          </Provider>
        </BrowserRouter>
      );

      const title = screen.getByRole("heading");

      expect(title).toBeInTheDocument();
    });
  });
});
