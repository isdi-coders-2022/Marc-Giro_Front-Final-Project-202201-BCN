import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { Navbar } from "../components/Navbar/Navbar";
import { RootState } from "../redux/store";
import { loadLocalMoviesThunk } from "../redux/thunks/moviesThunk";

export const HomePage = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector((state: RootState) => state.moviesReducer);
  console.log(moviesList);
  console.log("useeffectprevi");
  useEffect(() => {
    console.log("useeffectdins");
    dispatch(loadLocalMoviesThunk("Hola"));
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <MovieCard movie={moviesList[0]} />;
    </>
  );
};
