import {
  LoadLocalMoviesActionInterface,
  DeleteLocalMovieActionInterface,
  Movie,
  SomeActionInterface,
  AddLocalMovieActionInterface,
} from "../../interfaces/Movie";
import { actionsTypes } from "../actions/actionsTypes";

const moviesReducer = (
  currentMovies: Movie[] = [],
  action:
    | SomeActionInterface
    | LoadLocalMoviesActionInterface
    | DeleteLocalMovieActionInterface = {
    type: "",
    movies: [],
  }
): Movie[] => {
  let newMovies: Movie[];
  switch (action.type) {
    case actionsTypes.loadLocalMovies:
      newMovies = [...(action as LoadLocalMoviesActionInterface).movies];
      break;
    case actionsTypes.deleteLocalMovie:
      newMovies = currentMovies.filter(
        (movie) =>
          movie._id !== (action as DeleteLocalMovieActionInterface).movieId
      );
      break;

    case actionsTypes.addLocalMovie:
      newMovies = [
        (action as AddLocalMovieActionInterface).movie,
        ...currentMovies,
      ];
      break;

    default:
      newMovies = [...currentMovies];
      break;
  }
  return newMovies;
};

export default moviesReducer;
