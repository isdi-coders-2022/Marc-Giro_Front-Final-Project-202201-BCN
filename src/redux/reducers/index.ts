import { combineReducers } from "redux";
import messageReducer from "./messageReducer";
import moviesReducer from "./moviesReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  moviesReducer: moviesReducer,
  usersReducer: usersReducer,
  messageReducer: messageReducer,
});

export default rootReducer;
