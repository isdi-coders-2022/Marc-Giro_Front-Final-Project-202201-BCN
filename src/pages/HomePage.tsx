import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { Navbar } from "../components/Navbar/Navbar";
import { Movie } from "../interfaces/Movie";
import { RootState } from "../redux/store";
import { loadLocalMoviesThunk } from "../redux/thunks/moviesThunk";

export const HomePage = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector((state: RootState) => state.moviesReducer);
  useEffect(() => {
    dispatch(loadLocalMoviesThunk("Hola"));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {moviesList.map((movie: Movie) => (
        <MovieCard movie={movie} key={movie.Title} />
      ))}
    </>
  );
};
