import styled from "styled-components";
import { Movie } from "../../interfaces/Movie";

const MovieCardStyle = styled.li`
  background-color: #83c5be30;
  height: 120px;
  width: 314px;
  display: flex;
  & div {
    display: flex;
    flex-direction: column;
    width: 234px;

    & h2 {
      font-size: 22px;
      font-weight: bolder;
      margin-left: 12px;
      margin-top: 13px;
      margin-bottom: 10px;
    }

    & p {
      font-size: 15px;
      margin-left: 12px;
      margin-top: 2px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }

  & img {
    width: 80px;
  }
`;
interface MovieCardProps {
  movie: Movie;
}
export const MovieCard = ({
  movie: { Poster, Title, Year, Type },
}: MovieCardProps): JSX.Element => {
  let newTitle;
  if (Title.length > 19) {
    newTitle = Title.slice(0, 19) + "...";
  } else {
    newTitle = Title;
  }
  return (
    <MovieCardStyle>
      <img src={Poster} alt={Title} />
      <div>
        <h2>{newTitle}</h2>
        <p>{Year}</p>
        <p>{Type}</p>
      </div>
    </MovieCardStyle>
  );
};
