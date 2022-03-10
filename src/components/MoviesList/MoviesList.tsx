import { Movie } from "../../interfaces/Movie";
import { MovieCard } from "../MovieCard/MovieCard";

interface MoviesListProps {
  movies: Movie[];
}

const MoviesList = ({ movies }: MoviesListProps): JSX.Element => {
  return (
    <>
      <h3>{movies.length} items</h3>
      <ul>
        {movies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.Title} />
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
