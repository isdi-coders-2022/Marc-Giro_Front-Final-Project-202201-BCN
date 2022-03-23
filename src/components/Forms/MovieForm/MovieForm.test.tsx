import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  describe("When it's rendered with a new player and the user click on submit", () => {
    test("Then it should reset the form and show the created player toast", async () => {
      JSON.parse = jest
        .fn()
        .mockImplementationOnce(() => ({ token: "akljdgdklsaj;" }));
      const data = {
        Title: "Kingsman",
        Year: "2014",
        Runtime: "130",
        Genre: "Action, Adventure, Comedy",
        Type: "Movie",
        Director: "Jane Goldman",
        Writer: "Colin Firth, Taron Egerton, Samuel L Jackson",
        Actors: "Colin Firth, Taron Egerton, Samuel L Jackson",
        Plot: "A spy organisation recruits a promising street kid into the agency's training program, while a global threat emerges from a twisted tech genius.",
        Poster:
          "https://firebasestorage.googleapis.com/v0/b/marcgiro-movieapi.appspot.com/o/Kingsman?alt=media&token=37ceef0c-09b0-4116-a779-3ab9b1f8cf1e",
      };
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MovieForm thunk={addLocalMovieThunk} />
          </Provider>
        </BrowserRouter>
      );
      const dispatch = jest.fn();

      const innerThunk = await addLocalMovieThunk(data);
      await innerThunk(dispatch);

      const createMovieButton = screen.getByRole("button");
      userEvent.click(createMovieButton);

      expect(createMovieButton).toBeInTheDocument();
    });
  });
});
