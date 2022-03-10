import { ActionsCreators } from "../../interfaces/ActionsTypes";
import { Movie } from "../../interfaces/Movie";
import { actionsTypes } from "../actions/actionsTypes";

const moviesReducer = (
  currentState: Movie[],
  action: ActionsCreators = {}
): Movie[] => {
  let newMovies;
  switch (action.type) {
    case actionsTypes.loadLocalMovies:
      if (action as ActionsCreators) {
        return (newMovies = [...(action as Movie[])]);
      } else {
        newMovies = [...currentState];
      }
      break;

    default:
      newMovies = [...currentState];
      break;
  }
  return newMovies as Movie[];
};

export default moviesReducer;
