import { Movie } from "../interfaces/Movie";
import { actionsTypes } from "./actionsTypes";

export const loadPublicMovies = (movies: Movie) => ({
  type: actionsTypes.loadPublicMovies,
  movies,
});

export const loadLocalMovies = (movies: Movie) => ({
  type: actionsTypes.loadLocalMovies,
  movies,
});
