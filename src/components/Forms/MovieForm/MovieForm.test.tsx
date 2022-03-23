import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../redux/store";
import { addLocalMovieThunk } from "../../../redux/thunks/moviesThunk";
import MovieForm from "./MovieForm";

describe("Given a MovieForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MovieForm thunk={addLocalMovieThunk} />
          </Provider>
        </BrowserRouter>
      );

      const createMovieButton = screen.getByRole("button");

      expect(createMovieButton).toBeInTheDocument();
    });
  });
});
