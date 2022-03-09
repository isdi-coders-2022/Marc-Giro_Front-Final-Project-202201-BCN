import { Movie } from "./Movie";

export interface MovieDetail extends Movie {
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Watchlist: string;
  Rating: number;
}
