import { Movie, SomeActionInterface } from "../../interfaces/Movie";
import { actionsTypes } from "./actionsTypes";

export const loadLocalMoviesAction = (
  movies: Movie[]
): LoadLocalMoviesActionInterface => ({
  type: actionsTypes.loadLocalMovies,
  movies,
});

interface LoadLocalMoviesActionInterface extends SomeActionInterface {
  movies: Movie[];
}
