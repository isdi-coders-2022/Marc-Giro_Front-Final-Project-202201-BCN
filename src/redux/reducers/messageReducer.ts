import { actionsTypes } from "../actions/actionsTypes";
import { SomeActionInterface } from "../../interfaces/Movie";
import { setMessageActionInterface } from "../../interfaces/User";

const messageReducer = (
  state = {},
  action: SomeActionInterface | setMessageActionInterface = {
    type: "",
    message: "",
  }
) => {
  switch (action.type) {
    case actionsTypes.setMessage:
      return (action as setMessageActionInterface).message;
    case actionsTypes.clearMessage:
      return { message: "" };
    default:
      return state;
  }
};

export default messageReducer;
