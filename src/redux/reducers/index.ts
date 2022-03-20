import { combineReducers } from "redux";
import messageReducer from "./messageReducer";
import movieDetailReducer from "./movieDetailReducer";
import moviesReducer from "./moviesReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  moviesReducer: moviesReducer,
  usersReducer: usersReducer,
  messageReducer: messageReducer,
  movieDetailReducer: movieDetailReducer,
});

export default rootReducer;
