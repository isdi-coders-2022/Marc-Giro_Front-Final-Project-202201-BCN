export interface Movie {
  Title: string;
  Year: string;
  Poster?: string;
  Type: string;
  _id?: string;
}

export interface MovieDetails extends Movie {
  Genre: string;
  Runtime: number;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
}

export interface CreatedMovie {
  Title: string;
  Year: string;
  Poster?: any;
  Type: string;
  _id?: string;
  Genre: string;
  Runtime: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
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
  movie: MovieDetails;
}

export interface loadLocalMovieDetailActionInterface
  extends SomeActionInterface {
  movie: MovieDetails;
}
