import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { MovieDetailCard } from "../components/MovieDetailCard/MovieDetailCard";
import { MovieDetails } from "../interfaces/Movie";
import { RootState } from "../redux/store";
import { loadLocalMovieDetailThunk } from "../redux/thunks/moviesThunk";

const MovieDetailPageStyle = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const MovieDetailPage = (): JSX.Element => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state: RootState) => state.movieDetailReducer);
  const { isLoggedIn } = useSelector((state: RootState) => state.usersReducer);
  useEffect(() => {
    dispatch(loadLocalMovieDetailThunk(movieId as string));
  }, [dispatch, movieId]);
  return (
    <>
      <MovieDetailPageStyle>
        {movie.Title ? (
          <MovieDetailCard
            movie={movie as MovieDetails}
            isLoggedIn={isLoggedIn}
          />
        ) : (
          <></>
        )}
      </MovieDetailPageStyle>
    </>
  );
};
