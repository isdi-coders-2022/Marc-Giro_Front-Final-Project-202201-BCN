import { Movie } from "../interfaces/Movie";
import { actionsTypes } from "./actionsTypes";

export const loadLocalMovies = (movies: Movie[]) => ({
  type: actionsTypes.loadLocalMovies,
  movies,
});
