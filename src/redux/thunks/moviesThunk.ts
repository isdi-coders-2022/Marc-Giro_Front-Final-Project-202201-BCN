import { ThunkDispatch } from "redux-thunk";
import {
  AddLocalMovieActionInterface,
  CreatedMovie,
  DeleteLocalMovieActionInterface,
  loadLocalMovieDetailActionInterface,
  LoadLocalMoviesActionInterface,
} from "../../interfaces/Movie";
import {
  addLocalMovieAction,
  deleteLocalMovieAction,
  loadLocalMovieDetailAction,
  loadLocalMoviesAction,
  updateLocalMovieAction,
} from "../actions/actionsCreators";
import { RootState } from "../store";

export const url = process.env.REACT_APP_API_URL;

export const loadLocalMoviesThunk =
  (search: string) =>
  async (
    dispatch: ThunkDispatch<void, unknown, LoadLocalMoviesActionInterface>
  ) => {
    const response = await fetch(`${url}movies`);
    const moviesList = await response.json();

    dispatch(loadLocalMoviesAction(moviesList));
  };

export const deleteLocalMovieThunk =
  (movieId: string) =>
  async (
    dispatch: ThunkDispatch<void, unknown, DeleteLocalMovieActionInterface>
  ) => {
    const response = await fetch(`${url}movies/${movieId}`, {
      method: "DELETE",
      headers: {
        authorization: JSON.parse(localStorage.getItem("userToken") as string)
          .token,
      },
    });

    if (response.ok) {
      dispatch(deleteLocalMovieAction(movieId));
    }
  };

export const loadLocalMovieDetailThunk =
  (id: string) =>
  async (
    dispatch: ThunkDispatch<void, unknown, loadLocalMovieDetailActionInterface>
  ) => {
    const response = await fetch(`${url}movies/${id}`);
    const detailedMovie = await response.json();

    dispatch(loadLocalMovieDetailAction(detailedMovie));
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

    console.log("MOVIE");
    console.log(movie);

    console.log("DATA");
    for (var pair of data.entries()) {
      console.log(pair[0] + ":" + pair[1]);
    }
    const response = await fetch(`${url}movies`, {
      method: "POST",
      body: data,
      headers: {
        authorization: JSON.parse(localStorage.userToken).token,
      },
    });
    console.log(response);
    debugger;
    const responseCreateMovie = await response.json();
    console.log(responseCreateMovie, "RESPONSE CREATE MOVIE");

    if (response.ok) {
      dispatch(addLocalMovieAction(responseCreateMovie.movie));
    }
  };

export const updateLocalMovieThunk =
  (movie: CreatedMovie, id: any) =>
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
    const response = await fetch(`${url}movies/${id}`, {
      method: "PUT",
      body: data,
      headers: {
        authorization: JSON.parse(localStorage.userToken).token,
      },
    });

    const responseUpdateMovie = await response.json();
    if (responseUpdateMovie.message.includes("successfully")) {
      dispatch(updateLocalMovieAction(responseUpdateMovie.movie.updatedMovie));
    }
  };
