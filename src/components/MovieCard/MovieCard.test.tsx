import { render, screen } from "@testing-library/react";
import { MovieCard } from "./MovieCard";

describe("Given a MovieCard component", () => {
  describe("When it is receives a movie", () => {
    test("Then it should display the title of the movie", () => {
      const movie = { title: "Hello", year: 1999, type: "Movie", image: "" };
      render(<MovieCard movie={movie} />);

      const title = screen.getByRole("heading", { name: "Hello" });

      expect(title).toBeInTheDocument();
    });
  });
  describe("When it is receives a movie with a title longer than 20 characters", () => {
    test("Then it should display the first 19 characters of the title followed by ...", () => {
      const movie = {
        title: "HelloHelloHelloHelloHelloHello",
        year: 1999,
        type: "Movie",
        image: "",
      };
      render(<MovieCard movie={movie} />);

      const title = screen.getByRole("heading", {
        name: "HelloHelloHelloHell...",
      });

      expect(title).toBeInTheDocument();
    });
  });
});
