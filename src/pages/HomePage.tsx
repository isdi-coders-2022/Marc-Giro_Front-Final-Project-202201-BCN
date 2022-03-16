import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieForm from "../components/Forms/MovieForm/MovieForm";
import MoviesList from "../components/MoviesList/MoviesList";
import { RootState } from "../redux/store";
import { loadLocalMoviesThunk } from "../redux/thunks/moviesThunk";

export const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const moviesList = useSelector((state: RootState) => state.moviesReducer);
  useEffect(() => {
    dispatch(loadLocalMoviesThunk("Hola"));
  }, [dispatch]);

  return (
    <>
      <MoviesList movies={moviesList} />
    </>
  );
};
