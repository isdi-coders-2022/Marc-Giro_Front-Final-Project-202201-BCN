import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { MovieDetails } from "../../interfaces/Movie";
import {
  addLocalMovieAction,
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

export const addLocalMovieThunk =
  (movie: MovieDetails) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(`${url}movies/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
    const responseCreateMovie = await response.json();

    if (responseCreateMovie.message === "Movie created") {
      dispatch(addLocalMovieAction(responseCreateMovie.movie));
    }
  };
