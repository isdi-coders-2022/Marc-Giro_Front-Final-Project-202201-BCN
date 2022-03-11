import {
  DeleteLocalMovieActionInterface,
  Movie,
  LoadLocalMoviesActionInterface,
} from "../../interfaces/Movie";
import { actionsTypes } from "./actionsTypes";

export const loadLocalMoviesAction = (
  movies: Movie[]
): LoadLocalMoviesActionInterface => ({
  type: actionsTypes.loadLocalMovies,
  movies,
});

export const deleteLocalMovieAction = (
  movieId: string
): DeleteLocalMovieActionInterface => ({
  type: actionsTypes.deleteLocalMovie,
  movieId,
});
