import {
  loadLocalMovieDetailActionInterface,
  MovieDetails,
  SomeActionInterface,
} from "../../interfaces/Movie";
import { actionsTypes } from "../actions/actionsTypes";

const movieDetailReducer = (
  currentMovie = {},
  action: SomeActionInterface | loadLocalMovieDetailActionInterface = {
    type: "",
  }
): MovieDetails => {
  let movieDetail: MovieDetails;
  switch (action.type) {
    case actionsTypes.loadLocalMovieDetail:
      movieDetail = (action as loadLocalMovieDetailActionInterface).movie;
      break;

    default:
      movieDetail = currentMovie as MovieDetails;
  }
  return movieDetail;
};

export default movieDetailReducer;
