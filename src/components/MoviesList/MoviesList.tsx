import { Movie } from "../../interfaces/Movie";
import { MovieCard } from "../MovieCard/MovieCard";
import styled from "styled-components";

const MovieCardStyle = styled.div`
  display: flex;
  justify-content: center;

  & section {
    width: 90vw;
    margin-top: 20px;
    display: flex;
    justify-content: right;
    flex-direction: column;

    & h3 {
      font-size: 22px;
      font-weight: bolder;
      margin-left: 0;
      margin-top: 13px;
      margin-bottom: 10px;
      @media (min-width: 810px) {
        margin-bottom: 20px;
      }
    }

    & ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 0;

      @media (min-width: 810px) {
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
  }
`;

interface MoviesListProps {
  movies: Movie[];
}

const MoviesList = ({ movies }: MoviesListProps): JSX.Element => {
  let textItems;
  if (movies.length === 0) {
    textItems = "movies found";
  } else if (movies.length === 1) {
    textItems = "movie found";
  } else {
    textItems = "movies found";
  }
  return (
    <>
      <MovieCardStyle>
        <section>
          <h3>
            {movies.length} {textItems}
          </h3>
          <ul>
            {movies.map((movie: Movie) => (
              <MovieCard movie={movie} key={movie._id} />
            ))}
          </ul>
        </section>
      </MovieCardStyle>
    </>
  );
};

export default MoviesList;
