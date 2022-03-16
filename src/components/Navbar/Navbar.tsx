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
  return (
    <NavbarStyle>
      <ul>
        <li>
          <Link to="/home">
            <FontAwesomeIcon icon={faVideo} />
          </Link>
        </li>
        <li>
          <Link to="/createMovie">
            <FontAwesomeIcon icon={faCirclePlus} />
          </Link>
        </li>
        <li>
          <Link to="/watchlist">
            <FontAwesomeIcon icon={faBookmark} />
          </Link>
        </li>
        <li>
          <Link to="/ratings">
            <FontAwesomeIcon icon={faStar} />
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </li>
      </ul>
    </NavbarStyle>
  );
};
