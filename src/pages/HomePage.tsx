import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesList from "../components/MoviesList/MoviesList";
import { Navbar } from "../components/Navbar/Navbar";
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
      <MoviesList movies={moviesList} />
    </>
  );
};
