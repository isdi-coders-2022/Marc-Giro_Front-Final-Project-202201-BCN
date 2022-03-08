import { Movie } from "./Movie";

export interface MovieDetail extends Movie {
  director: String;
  writer: String;
  actors: String;
  plot: String;
  watchlist: Boolean;
  rating: Number;
}
