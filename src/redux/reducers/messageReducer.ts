import { actionsTypes } from "../actions/actionsTypes";
import { SomeActionInterface } from "../../interfaces/Movie";
import { setMessageActionInterface } from "../../interfaces/User";

const messageReducer = (
  state = {},
  action: SomeActionInterface | setMessageActionInterface = { type: "" }
) => {
  const { message } = action as setMessageActionInterface;
  switch (action.type) {
    case actionsTypes.setMessage:
      return { message };
    case actionsTypes.clearMessage:
      return { message: "" };
    default:
      return state;
  }
};

export default messageReducer;
