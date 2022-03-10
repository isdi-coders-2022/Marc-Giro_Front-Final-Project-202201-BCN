import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormButton from "../components/Buttons/FormButton";
import PaginationButton from "../components/Buttons/PaginationButton";
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
