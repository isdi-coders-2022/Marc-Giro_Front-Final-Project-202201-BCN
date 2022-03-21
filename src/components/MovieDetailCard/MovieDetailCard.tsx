import styled from "styled-components";
import { MovieDetails } from "../../interfaces/Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faStar,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteLocalMovieThunk } from "../../redux/thunks/moviesThunk";
import DeleteIcon from "../Icons/DeleteIcon";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const MovieDetailCardStyle = styled.div`
  width: 372px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10%;
  @media (min-width: 800px) {
    width: 713px;
  }

  & .image-title-genre-plot {
    display: flex;

    & img {
      width: 180px;
      height: 270px;
      object-fit: cover;
      @media (min-width: 800px) {
        width: 250px;
        height: 375px;
      }
    }

    & div {
      width: 192px;
      height: 270px;
      background-color: #83c5be30;
      @media (min-width: 800px) {
        height: 375px;
        width: 463px;
      }
      & h3 {
        margin-left: 10px;
        margin-right: 5px;
        @media (min-width: 800px) {
          display: flex;
        }
      }

      & p {
        margin-left: 10px;
        margin-right: 5px;
      }
      & .plot-desktop {
        margin-left: 10px;
        margin-right: 5px;
        display: none;
        @media (min-width: 800px) {
          display: flex;
          margin-left: 10px;
          margin-right: 5px;
        }
      }
    }
  }

  & .bottom-section {
    background-color: #335c6710;
    width: 372px;
    @media (min-width: 800px) {
      background-color: #335c6710;
      width: 713px;
    }
  }
  & .director-writer-actors-plot {
    & p {
      margin-left: 10px;
      margin-right: 5px;
      & span {
        font-weight: bold;
      }
    }
    & .plot-mobile {
      margin-left: 10px;
      margin-right: 5px;
      @media (min-width: 800px) {
        display: none;
      }
    }
  }

  & .iconsLine {
    width: 215px;
    margin-top: 5px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    width: 95%;
    justify-content: flex-end;

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
`;
interface MovieDetailCardProps {
  movie: MovieDetails;
  isLoggedIn: Boolean;
}

export const MovieDetailCard = ({
  movie: {
    Poster,
    Title,
    Year,
    Type,
    _id,
    Genre,
    Actors,
    Director,
    Plot,
    Runtime,
    Writer,
  },
  isLoggedIn,
}: MovieDetailCardProps): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateMovie = () => {
    navigate(`/updatemovie/${_id}`);
  };

  const deleteMovie = (_id: any) => {
    dispatch(deleteLocalMovieThunk(_id));
    navigate("/");
  };

  let newTitle;
  if (Title.length > 19) {
    newTitle = Title.slice(0, 19) + "...";
  } else {
    newTitle = Title;
  }
  return (
    <MovieDetailCardStyle>
      <div className="image-title-genre-plot">
        <img src={Poster} alt={Title} />
        <div>
          <h3>
            {newTitle} ({Year})
          </h3>
          <p>{Type}</p>
          <p>{Genre}</p>
          <p className="plot-desktop">{Plot}</p>
        </div>
      </div>
      <div className="bottom-section">
        <div className="director-writer-actors-plot">
          <p>
            <span>Director:</span> {Director}
          </p>
          <p>
            <span>Writer:</span> {Writer}
          </p>
          <p>
            <span>Actors:</span> {Actors}
          </p>
          <p className="plot-mobile">
            <span>Plot:</span> {Plot}
          </p>
        </div>
        {isLoggedIn ? (
          <div className="iconsLine">
            <i
              role="button"
              onClick={() => {
                updateMovie();
              }}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </i>

            <i role="button" onClick={() => {}}>
              <FontAwesomeIcon icon={faStar} />
            </i>

            <i role="button" onClick={() => {}}>
              <FontAwesomeIcon icon={faBookmark} />
            </i>

            <i>
              <DeleteIcon
                onClick={() => {
                  deleteMovie(_id);
                  toast.success("Movie deleted", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 500,
                    theme: "colored",
                    hideProgressBar: true,
                  });
                }}
              />
            </i>
          </div>
        ) : (
          <></>
        )}
      </div>
    </MovieDetailCardStyle>
  );
};
