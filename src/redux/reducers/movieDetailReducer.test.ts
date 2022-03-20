import { MovieDetails } from "../../interfaces/Movie";
import { actionsTypes } from "../actions/actionsTypes";
import movieDetailReducer from "./movieDetailReducer";

describe("Given an movieDetailReducer function", () => {
  describe("When it is called with a loadLocalMovieDetailAction with a movie", () => {
    test("then it should return the movie as the new state", () => {
      const currentState: MovieDetails = {} as MovieDetails;
      const movie: MovieDetails = {
        Title: "Hola",
        Year: "1999",
        Poster: "foto",
        Type: "movie",
        Actors: "A lot of actors",
        Director: "Great director",
        Genre: "Drama",
        Plot: "Movie plot",
        Runtime: 120,
        Writer: "Great writer",
      };
      const action = {
        type: actionsTypes.loadLocalMovieDetail,
        movie,
      };

      const newState = movieDetailReducer(currentState, action);

      expect(newState).toEqual(movie);
    });
  });

  describe("When it is called with a non existing action with a movie", () => {
    test("then it should return the movie as the new state", () => {
      const currentState: MovieDetails = {} as MovieDetails;
      const movie: MovieDetails = {
        Title: "Hola",
        Year: "1999",
        Poster: "foto",
        Type: "movie",
        Actors: "A lot of actors",
        Director: "Great director",
        Genre: "Drama",
        Plot: "Movie plot",
        Runtime: 120,
        Writer: "Great writer",
      };

      const action = {
        type: "",
        movie,
      };

      const newState = movieDetailReducer(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });
});
