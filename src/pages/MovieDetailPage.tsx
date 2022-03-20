import { useSelector } from "react-redux";
import styled from "styled-components";
import { MovieDetailCard } from "../components/MovieDetailCard/MovieDetailCard";
import { MovieDetails } from "../interfaces/Movie";
import { RootState } from "../redux/store";

const MovieDetailPageStyle = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const MovieDetailPage = (): JSX.Element => {
  const movie = useSelector((state: RootState) => state.movieDetailReducer);
  const { isLoggedIn } = useSelector((state: RootState) => state.usersReducer);
  // console.log(movie);
  return (
    <>
      <MovieDetailPageStyle>
        <MovieDetailCard
          movie={movie as MovieDetails}
          isLoggedIn={isLoggedIn}
        />
      </MovieDetailPageStyle>
    </>
  );
};
