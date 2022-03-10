export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

export interface SomeActionInterface {
  type: string;
}

export interface LoadLocalMoviesActionInterface extends SomeActionInterface {
  movies: Movie[];
}
