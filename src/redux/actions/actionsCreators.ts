import {
  DeleteLocalMovieActionInterface,
  Movie,
  LoadLocalMoviesActionInterface,
  AddLocalMovieActionInterface,
  SomeActionInterface,
  MovieDetails,
  loadLocalMovieDetailActionInterface,
} from "../../interfaces/Movie";
import {
  loginActionInterface,
  setMessageActionInterface,
  userLoginDataInterface,
} from "../../interfaces/User";
import { actionsTypes } from "./actionsTypes";

export const loadLocalMoviesAction = (
  movies: Movie[]
): LoadLocalMoviesActionInterface => ({
  type: actionsTypes.loadLocalMovies,
  movies,
});

export const deleteLocalMovieAction = (
  movieId: string
): DeleteLocalMovieActionInterface => ({
  type: actionsTypes.deleteLocalMovie,
  movieId,
});

export const addLocalMovieAction = (
  movie: Movie
): AddLocalMovieActionInterface => ({
  type: actionsTypes.addLocalMovie,
  movie,
});

export const setMessageAction = (
  message: string
): setMessageActionInterface => ({
  type: actionsTypes.setMessage,
  message,
});

export const clearMessageAction = (): SomeActionInterface => ({
  type: actionsTypes.clearMessage,
});

export const registerSuccessAction = (): SomeActionInterface => ({
  type: actionsTypes.registerSuccess,
});

export const registerFailAction = (): SomeActionInterface => ({
  type: actionsTypes.registerFail,
});

export const loginSuccessAction = (
  userLoginData: userLoginDataInterface
): loginActionInterface => ({
  type: actionsTypes.loginSuccess,
  userLoginData,
});

export const loginFailAction = (): SomeActionInterface => ({
  type: actionsTypes.loginFail,
});

export const logoutAction = () => ({
  type: actionsTypes.logout,
});

export const updateLocalMovieAction = (
  movie: Movie
): AddLocalMovieActionInterface => ({
  type: actionsTypes.updateLocalMovie,
  movie,
});

export const loadLocalMovieDetailAction = (
  movie: MovieDetails
): loadLocalMovieDetailActionInterface => ({
  type: actionsTypes.loadLocalMovieDetail,
  movie,
});
