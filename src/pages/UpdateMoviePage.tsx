import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieForm from "../components/Forms/MovieForm/MovieForm";
import { RootState } from "../redux/store";
import {
  loadLocalMovieDetailThunk,
  updateLocalMovieThunk,
} from "../redux/thunks/moviesThunk";
import { CreateMoviePageStyle } from "./CreateMoviePage";

const UpdateMoviePage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const movieToUpdate = useSelector(
    (state: RootState) => state.movieDetailReducer
  );

  useEffect(() => {
    dispatch(loadLocalMovieDetailThunk(movieId as string));
  }, [dispatch, movieId]);

  return (
    <>
      <CreateMoviePageStyle>
        <h2>Create your Movie</h2>
        <MovieForm
          thunk={updateLocalMovieThunk}
          movieToUpdate={movieToUpdate}
        />
      </CreateMoviePageStyle>
    </>
  );
};

export default UpdateMoviePage;
