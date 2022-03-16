import styled from "styled-components";
import MovieForm from "../components/Forms/MovieForm/MovieForm";

const CreateMoviePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    @media (min-width: 800px) {
      margin-top: 100px;
      margin-bottom: 80px;
    }
  }
`;

export const CreateMoviePage = (): JSX.Element => {
  return (
    <>
      <CreateMoviePageStyle>
        <h2>Create your Movie</h2>
        <MovieForm />
      </CreateMoviePageStyle>
    </>
  );
};
