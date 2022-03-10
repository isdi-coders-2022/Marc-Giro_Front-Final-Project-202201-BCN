import { LoadLocalMoviesActionInterface, Movie } from "../../interfaces/Movie";
import { actionsTypes } from "../actions/actionsTypes";

const moviesReducer = (
  currentMovies: Movie[] = [],
  action: LoadLocalMoviesActionInterface = { type: "", movies: [] }
): Movie[] => {
  let newMovies: Movie[];
  switch (action.type) {
    case actionsTypes.loadLocalMovies:
      newMovies = [...action.movies];
      break;

    default:
      newMovies = [...currentMovies];
      break;
  }
  return newMovies as Movie[];
};

export default moviesReducer;
