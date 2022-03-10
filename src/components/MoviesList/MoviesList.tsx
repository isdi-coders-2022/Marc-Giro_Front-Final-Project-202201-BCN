import { Movie } from "../../interfaces/Movie";
import { MovieCard } from "../MovieCard/MovieCard";

interface MoviesListProps {
  movies: Movie[];
}

const MoviesList = ({ movies }: MoviesListProps): JSX.Element => {
  return (
    <>
      <ul>
        {movies.map((movie: Movie) => {
          return <MovieCard movie={movie} />;
        })}
      </ul>
    </>
  );
};

export default MoviesList;
