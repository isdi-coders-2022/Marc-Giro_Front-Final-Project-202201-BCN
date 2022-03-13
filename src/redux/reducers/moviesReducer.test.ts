import { Movie } from "../../interfaces/Movie";
import { actionsTypes } from "../actions/actionsTypes";
import moviesReducer from "./moviesReducer";

describe("Given an moviesReducer function", () => {
  describe("When it is called with a loadLocalMovies action with movies", () => {
    test("then it should return the movies as the new state", () => {
      const currentState: Movie[] = [];
      const movies = [
        {
          Title: "Hola",
          Year: "1999",
          Poster: "foto",
          Type: "movie",
          _id: "6228796b92d232f647b99044",
        },
        {
          Title: "Adeu",
          Year: "1990",
          Poster: "foto2",
          Type: "series",
          _id: "6228796b92d232f647b99045",
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

  describe("When it is called with a deleteLocalMovie action with a movieId", () => {
    test("then it should return the current movies withoud the movie corresponding with the movieId", () => {
      const movieId = "6228796b92d232f647b99044";
      const currentState: Movie[] = [
        {
          Title: "Hola",
          Year: "1999",
          Poster: "foto",
          Type: "movie",
          _id: "6228796b92d232f647b99044",
        },
        {
          Title: "Adeu",
          Year: "1990",
          Poster: "foto2",
          Type: "series",
          _id: "6228796b92d232f647b99045",
        },
      ];
      const filteredMovies: Movie[] = [
        {
          Title: "Adeu",
          Year: "1990",
          Poster: "foto2",
          Type: "series",
          _id: "6228796b92d232f647b99045",
        },
      ];
      const action = {
        type: actionsTypes.deleteLocalMovie,
        movieId,
      };

      const newState = moviesReducer(currentState, action);

      expect(newState).toEqual(filteredMovies);
    });
  });

  describe("When it is called with a deleteLocalMovie action with a nonexistent action", () => {
    test("Then it should return a new state with the current state (initial state)", () => {
      const currentMovies: Movie[] = [
        {
          Title: "Hola",
          Year: "1999",
          Poster: "foto",
          Type: "movie",
          _id: "6228796b92d232f647b99040",
        },
        {
          Title: "Adeu",
          Year: "1990",
          Poster: "foto2",
          Type: "series",
          _id: "6228796b92d232f647b99041",
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

  describe("When it is called with an addLocalMovie action with a movie", () => {
    test("Then it should return the current movies plus the new movie", () => {
      const newMovie: Movie = {
        Title: "Bon dia",
        Year: "1999",
        Poster: "foto",
        Type: "movie",
        _id: "6228796b92d232f647b99042",
      };
      const currentMovies: Movie[] = [
        {
          Title: "Hola",
          Year: "1999",
          Poster: "foto",
          Type: "movie",
          _id: "6228796b92d232f647b99040",
        },
        {
          Title: "Adeu",
          Year: "1990",
          Poster: "foto2",
          Type: "series",
          _id: "6228796b92d232f647b99041",
        },
      ];
      const allMovies: Movie[] = [
        {
          Title: "Hola",
          Year: "1999",
          Poster: "foto",
          Type: "movie",
          _id: "6228796b92d232f647b99040",
        },
        {
          Title: "Adeu",
          Year: "1990",
          Poster: "foto2",
          Type: "series",
          _id: "6228796b92d232f647b99041",
        },
        {
          Title: "Bon dia",
          Year: "1999",
          Poster: "foto",
          Type: "movie",
          _id: "6228796b92d232f647b99042",
        },
      ];
      const action = {
        type: "add-local-movie",
        movie: newMovie,
      };

      const newState = moviesReducer(currentMovies, action);

      expect(newState).toEqual(allMovies);
    });
  });
});
