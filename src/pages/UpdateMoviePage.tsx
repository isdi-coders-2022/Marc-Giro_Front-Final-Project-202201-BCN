import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieForm from "../components/Forms/MovieForm/MovieForm";
import { MovieDetails } from "../interfaces/Movie";
import { RootState } from "../redux/store";
import {
  loadLocalMoviesThunk,
  updateLocalMovieThunk,
} from "../redux/thunks/moviesThunk";

const UpdateMovie = () => {
  const { movieId } = useParams();
  const movies = useSelector((state: RootState) => state.moviesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLocalMoviesThunk("h"));
  }, [dispatch]);

  const movieToUpdate = movies.find(
    (movie: MovieDetails) => movie._id === movieId
  );

  return (
    <MovieForm
      thunkFunction={updateLocalMovieThunk}
      id={movieId}
      playerToUpdate={movieToUpdate}
    />
  );
};

export default UpdateMovie;
