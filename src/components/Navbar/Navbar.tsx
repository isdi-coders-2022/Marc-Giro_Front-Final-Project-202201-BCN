import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faCirclePlus,
  faBookmark,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const NavbarStyle = styled.nav`
  background-color: #335c6760;
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  & ul {
    display: flex;
    list-style: none;
    width: 90vw;
    justify-content: space-between;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;

    & a {
      font-size: 25px;
      color: black;
    }
  }
`;

export const Navbar = (): JSX.Element => {
  const { isLoggedIn } = useSelector((state: RootState) => state.usersReducer);
  return (
    <NavbarStyle>
      <ul>
        <li>
          <Link to="/home">
            <FontAwesomeIcon icon={faVideo} />
          </Link>
        </li>
        <li>
          <Link
            title="create movie"
            to={isLoggedIn ? "/createMovie" : "/login"}
          >
            <FontAwesomeIcon icon={faCirclePlus} />
          </Link>
        </li>
        <li>
          <Link title="watchlist" to={isLoggedIn ? "/watchlist" : "/login"}>
            <FontAwesomeIcon icon={faBookmark} />
          </Link>
        </li>
        <li>
          <Link title="ratings" to={isLoggedIn ? "/ratings" : "/login"}>
            <FontAwesomeIcon icon={faStar} />
          </Link>
        </li>
        <li>
          <Link title="user" to={isLoggedIn ? "/logout" : "/register"}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </li>
      </ul>
    </NavbarStyle>
  );
};
