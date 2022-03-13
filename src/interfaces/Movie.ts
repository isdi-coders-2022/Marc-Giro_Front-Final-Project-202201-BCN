export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
  _id?: string;
}

export interface SomeActionInterface {
  type: string;
}

export interface LoadLocalMoviesActionInterface extends SomeActionInterface {
  movies: Movie[];
}

export interface DeleteLocalMovieActionInterface extends SomeActionInterface {
  movieId: string;
}

export interface AddLocalMovieActionInterface extends SomeActionInterface {
  movie: Movie;
}
