import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import { MovieDetailPage } from "./MovieDetailPage";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => state,
}));

const state = {};

describe("Given a MovieDetailPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should not display a heading", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MovieDetailPage />
          </Provider>
        </BrowserRouter>
      );
    });
  });
});
