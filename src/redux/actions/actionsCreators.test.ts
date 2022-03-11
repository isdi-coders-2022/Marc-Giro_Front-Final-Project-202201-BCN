import { Movie } from "../../interfaces/Movie";
import {
  deleteLocalMovieAction,
  loadLocalMoviesAction,
} from "./actionsCreators";

describe("Given a load local movies action", () => {
  describe("When it receives movies", () => {
    test("Then it should return the action and the movies", () => {
      const movies: Movie[] = [
        {
          Title: "The Leftovers",
          Year: "2014–2017",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNTE3MDc1MjY4NV5BMl5BanBnXkFtZTgwMDg4MjQ4MTE@._V1_SX300.jpg",
        },
      ];
      const expectedAction = {
        type: "load-local-movies",
        movies,
      };

      const action = loadLocalMoviesAction(movies);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a delete local movie action", () => {
  describe("When it receives movieId", () => {
    test("Then it should return the action and the movieId", () => {
      const movieId: string = "jk;agd14";
      const expectedAction = {
        type: "delete-local-movie",
        movieId,
      };

      const action = deleteLocalMovieAction(movieId);

      expect(action).toEqual(expectedAction);
    });
  });
});
