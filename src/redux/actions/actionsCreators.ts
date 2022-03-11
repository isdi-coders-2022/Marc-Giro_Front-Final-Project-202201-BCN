import { Movie, SomeActionInterface } from "../../interfaces/Movie";
import { actionsTypes } from "./actionsTypes";

export const loadLocalMoviesAction = (
  movies: Movie[]
): LoadLocalMoviesActionInterface => ({
  type: actionsTypes.loadLocalMovies,
  movies,
});

export const deleteLocalMovie = (movieId: string) => ({
  type: actionsTypes.deleteLocalMovie,
  movieId,
});

interface LoadLocalMoviesActionInterface extends SomeActionInterface {
  movies: Movie[];
}
