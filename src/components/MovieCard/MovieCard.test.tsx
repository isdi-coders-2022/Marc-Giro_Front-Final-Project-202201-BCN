import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { MovieCard } from "./MovieCard";

describe("Given a MovieCard component", () => {
  describe("When it is receives a movie", () => {
    test("Then it should display the title of the movie", () => {
      const movie = {
        Title: "Hello",
        Year: "1999",
        Type: "Movie",
        Poster: "",
        _id: "6228796b92d232f647b99044",
      };
      render(
        <Provider store={store}>
          <MovieCard isLoggedIn={true} movie={movie} />
        </Provider>
      );

      const title = screen.getByRole("heading", { name: "Hello" });

      expect(title).toBeInTheDocument();
    });
  });
  describe("When it is receives a movie with a title longer than 20 characters", () => {
    test("Then it should display the first 19 characters of the title followed by ...", () => {
      const movie = {
        Title: "HelloHelloHelloHelloHelloHello",
        Year: "1999",
        Type: "Movie",
        Poster: "",
        _id: "6228796b92d232f647b99044",
      };
      render(
        <Provider store={store}>
          <MovieCard isLoggedIn={true} movie={movie} />
        </Provider>
      );

      const title = screen.getByRole("heading", {
        name: "HelloHelloHelloHell...",
      });

      expect(title).toBeInTheDocument();
    });
  });
});
