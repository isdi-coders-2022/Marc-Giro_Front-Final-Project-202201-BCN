import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
  AddLocalMovieActionInterface,
  CreatedMovie,
} from "../../interfaces/Movie";
import {
  addLocalMovieAction,
  deleteLocalMovieAction,
  loadLocalMoviesAction,
} from "../actions/actionsCreators";
import { RootState } from "../store";

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
  (movie: CreatedMovie) =>
  async (
    dispatch: ThunkDispatch<RootState, void, AddLocalMovieActionInterface>
  ): Promise<void> => {
    const data = new FormData();
    data.append("Title", movie.Title);
    data.append("Year", movie.Year);
    data.append("Genre", movie.Genre);
    data.append("Runtime", movie.Runtime);
    data.append("Type", movie.Type);
    data.append("Director", movie.Director);
    data.append("Writer", movie.Writer);
    data.append("Actors", movie.Actors);
    data.append("Plot", movie.Plot);
    data.append("Poster", movie.Poster);

    const response = await fetch(`${url}movies`, {
      method: "POST",
      body: data,
    });
    const responseCreateMovie = await response.json();

    if (responseCreateMovie.message === "Movie created") {
      dispatch(addLocalMovieAction(responseCreateMovie.movie));
    }
  };
