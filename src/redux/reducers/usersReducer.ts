import { actionsTypes } from "../actions/actionsTypes";
import { SomeActionInterface } from "../../interfaces/Movie";
import {
  loginActionInterface,
  setMessageActionInterface,
} from "../../interfaces/User";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const usersReducer = (
  state = initialState,
  action:
    | SomeActionInterface
    | setMessageActionInterface
    | loginActionInterface = { type: "" }
) => {
  switch (action.type) {
    case actionsTypes.registerSuccess:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actionsTypes.registerFail:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actionsTypes.loginSuccess:
      return {
        ...state,
        isLoggedIn: true,
        user: (action as loginActionInterface).userLoginData,
      };
    case actionsTypes.loginFail:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case actionsTypes.logout:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default usersReducer;
