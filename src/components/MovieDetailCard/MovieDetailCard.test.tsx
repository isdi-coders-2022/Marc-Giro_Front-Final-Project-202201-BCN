import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import { MovieDetailCard } from "./MovieDetailCard";

describe("Given a MovieDetailCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 3 buttons", () => {
      const isLoggedIn = true;
      const movie = {
        Title: "Kingsman",
        Year: "2014",
        Runtime: 130,
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
            <MovieDetailCard isLoggedIn={isLoggedIn} movie={movie} />
          </Provider>
        </BrowserRouter>
      );

      const buttons = screen.getAllByRole("button");
      buttons.forEach((button) => {
        userEvent.click(button);
      });

      expect(buttons).toHaveLength(3);
    });
  });
});
