import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
  deleteLocalMovieAction,
  loadLocalMoviesAction,
} from "../actions/actionsCreators";

const url = process.env.REACT_APP_API_URL;

export const loadLocalMoviesThunk =
  (search: string) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(`${url}movies/?s=${search}`);
    const moviesList = await response.json();

    dispatch(loadLocalMoviesAction(moviesList));
  };

export const deleteLocalMovieThunk =
  (movieId: string) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(`${url}movies/${movieId}`, {
      method: "DELETE",
    });
    const responseMessage = await response.json();

    if (responseMessage.message === "Movie deleted") {
      dispatch(deleteLocalMovieAction(movieId));
    }
  };
