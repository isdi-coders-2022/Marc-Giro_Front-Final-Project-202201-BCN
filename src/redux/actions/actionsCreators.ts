import {
  DeleteLocalMovieActionInterface,
  Movie,
  LoadLocalMoviesActionInterface,
  AddLocalMovieActionInterface,
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

export const addLocalMovieAction = (
  movie: Movie
): AddLocalMovieActionInterface => ({
  type: actionsTypes.addLocalMovie,
  movie,
});
