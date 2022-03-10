import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { loadLocalMoviesAction } from "../actions/actionsCreators";

const url = process.env.REACT_APP_API_URL;

export const loadLocalMoviesThunk =
  (search: string) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(`${url}movies/?s=${search}`);

    const moviesListResponse = await response.json();
    const moviesList = moviesListResponse.buzzs;
    dispatch(loadLocalMoviesAction(moviesList));
  };
