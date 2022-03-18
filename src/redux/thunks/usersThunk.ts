import jwtDecode from "jwt-decode";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
  userLoginDataFormInterface,
  userRegisterDataInterface,
} from "../../interfaces/User";
import {
  loginFailAction,
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
      dispatch(setMessageAction(newUser.message));
      dispatch(registerFailAction);
    } else {
      dispatch(setMessageAction(`${newUser.username} registered!`));
      dispatch(registerSuccessAction());
    }
  };

export const loginUserThunk =
  (userLoginData: userLoginDataFormInterface) =>
  async (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    try {
      const response = await fetch(`${url}user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLoginData),
      });
      const tokenResponse = await response.json();
      if (!tokenResponse.error) {
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
        dispatch(setMessageAction("Log in successful"));
      } else {
        dispatch(loginFailAction());
        dispatch(setMessageAction(tokenResponse.message));
      }
    } catch (error) {
      dispatch(loginFailAction());
      dispatch(setMessageAction("General error"));
    }
  };
