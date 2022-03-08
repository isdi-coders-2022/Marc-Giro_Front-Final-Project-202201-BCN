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
  movie: { image, title, year, type },
}: MovieCardProps): JSX.Element => {
  let newTitle;
  if (title.length > 20) {
    newTitle = title.slice(0, 19) + "...";
  } else {
    newTitle = title;
  }
  return (
    <MovieCardStyle>
      <img src={image} alt={title} />
      <div>
        <h2>{newTitle}</h2>
        <p>{year}</p>
        <p>{type}</p>
      </div>
    </MovieCardStyle>
  );
};
