import { Movie } from "../../interfaces/Movie";
import { actionsTypes } from "../actions/actionsTypes";
import moviesReducer from "./moviesReducer";

describe("Given an moviesReducer function", () => {
  describe("When it is called with an empty state and a loadLocalMovies action with movies", () => {
    test("then it should return the movies as the new state", () => {
      const currentState: Movie[] = [];
      const movies = [
        {
          Title: "Hola",
          Year: "1999",
          Poster: "foto",
          Type: "movie",
        },
        {
          Title: "Adeu",
          Year: "1990",
          Poster: "foto2",
          Type: "series",
        },
      ];
      const action = {
        type: actionsTypes.loadLocalMovies,
        movies,
      };
      const newState = moviesReducer(currentState, action);

      expect(newState).toEqual(movies);
    });
  });
  describe("When it's called with an nonexistent action", () => {
    test("Then it should return a new state with the current state (initial state)", () => {
      const currentMovies: Movie[] = [
        {
          Title: "Hola",
          Year: "1999",
          Poster: "foto",
          Type: "movie",
        },
        {
          Title: "Adeu",
          Year: "1990",
          Poster: "foto2",
          Type: "series",
        },
      ];

      const action = {
        type: "none",
        movies: currentMovies,
      };

      const newState = moviesReducer(currentMovies, action);

      expect(newState).toEqual(currentMovies);
    });
  });
});
