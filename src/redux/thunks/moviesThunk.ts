import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { loadLocalMoviesAction } from "../actions/actionsCreators";

const url = process.env.REACT_APP_API_URL;

export const loadLocalMoviesThunk =
  (search: string) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    console.log("thunkS");
    const response = await fetch(`${url}movies/?s=${search}`);
    const moviesList = await response.json();

    dispatch(loadLocalMoviesAction(moviesList));
  };
