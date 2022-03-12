import styled from "styled-components";
import { Movie } from "../../interfaces/Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteLocalMovieThunk } from "../../redux/thunks/moviesThunk";

const MovieCardStyle = styled.li`
  background-color: #83c5be30;
  height: 120px;
  width: 314px;
  display: flex;
  margin-bottom: 10%;
  @media (min-width: 800px) {
    margin-right: 50px;
  }
  & div {
    display: flex;
    flex-direction: column;
    width: 234px;

    & h2 {
      font-size: 22px;
      font-weight: bolder;
      margin-left: 12px;
      margin-top: 7px;
      margin-bottom: 8px;
    }

    & p {
      font-size: 15px;
      margin-left: 12px;
      margin-top: 1px;
      margin-bottom: 5px;
      font-weight: bold;
    }
    & .iconsLine {
      width: 215px;
      margin-top: 5px;
      margin-left: 12px;
      display: flex;
      flex-direction: row;
      justify-content: end;

      & i {
        display: flex;
        justify-content: center;
        height: 20px;
        width: 20px;
        margin-left: 20px;
        cursor: pointer;
      }

      & i :hover {
        color: hotpink;
      }
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
  movie: { Poster, Title, Year, Type, _id },
}: MovieCardProps): JSX.Element => {
  const dispatch = useDispatch();

  const deleteMovie = (_id: any): void => {
    dispatch(deleteLocalMovieThunk(_id));
  };

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
        <div className="iconsLine">
          <i onClick={() => {}}>
            <FontAwesomeIcon icon={faStar} />
          </i>
          <i onClick={() => {}}>
            <FontAwesomeIcon icon={faBookmark} />
          </i>
          <i
            onClick={() => {
              deleteMovie(_id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </i>
        </div>
      </div>
    </MovieCardStyle>
  );
};
