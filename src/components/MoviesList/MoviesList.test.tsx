import { render, screen } from "@testing-library/react";
import MoviesList from "./MoviesList";

describe("Given a MoviesList component", () => {
  describe("When it receives an array of movies", () => {
    test("Then it should display the movies title", () => {
      const movies = [
        {
          Title: "Hello",
          Year: "1999",
          Type: "Movie",
          Poster: "",
          _id: "6228796b92d232f647b99044",
        },
      ];
      render(<MoviesList movies={movies} />);

      const imageAlt = screen.getByRole("img", { name: "Hello" });
      expect(imageAlt).toBeInTheDocument();
    });
  });
});
