import jwtDecode from "jwt-decode";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
  userLoginDataInterface,
  userRegisterDataInterface,
} from "../../interfaces/User";
import {
  loginSuccessAction,
  registerFailAction,
  registerSuccessAction,
  setMessageAction,
} from "../actions/actionsCreators";
import { RootState } from "../store";

const url = process.env.REACT_APP_API_URL;

export const createUserThunk =
  (userRegisterData: userRegisterDataInterface) =>
  async (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    const response = await fetch(`${url}user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userRegisterData),
    });
    const newUser = await response.json();
    if (newUser.message) {
      dispatch(registerFailAction);
      dispatch(setMessageAction(newUser.message));
    } else {
      dispatch(registerSuccessAction());
      dispatch(setMessageAction(`${newUser.username} registered!`));
    }
  };

export const loginUserThunk =
  (userLoginData: userLoginDataInterface) =>
  async (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    const response = await fetch(`${url}user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLoginData),
    });
    if (response.ok) {
      const tokenResponse = await response.json();
      const { id, username }: any = await jwtDecode(tokenResponse.token);
      localStorage.setItem(
        "userToken",
        JSON.stringify({
          id,
          username,
          token: tokenResponse.token,
        })
      );
      dispatch(
        loginSuccessAction({ id, username, token: tokenResponse.token })
      );
    } else {
    }
  };
