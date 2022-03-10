import { Movie } from "./Movie";

export interface ActionsTypes {
  loadLocalMovies: string;
}

export interface ActionsCreators {
  type?: string;
  movies?: Movie[];
}
