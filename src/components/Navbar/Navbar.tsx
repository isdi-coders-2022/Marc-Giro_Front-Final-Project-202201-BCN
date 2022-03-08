import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faCirclePlus,
  faBookmark,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const NavbarStyle = styled.nav`
  background-color: #335c6760;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  & ul {
    display: flex;
    list-style: none;
    width: 90vw;
    justify-content: space-around;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;

    & a {
      font-size: 20px;
      color: black;
    }
  }
`;

export const Navbar = (): JSX.Element => {
  return (
    <NavbarStyle>
      <ul>
        <li>
          <a href="/home">
            <FontAwesomeIcon icon={faVideo} />
          </a>
        </li>
        <li>
          <a href="/create">
            <FontAwesomeIcon icon={faCirclePlus} />
          </a>
        </li>
        <li>
          <a href="/create">
            <FontAwesomeIcon icon={faBookmark} />
          </a>
        </li>
        <li>
          <a href="/create">
            <FontAwesomeIcon icon={faStar} />
          </a>
        </li>
        <li>
          <a href="/create">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </li>
      </ul>
    </NavbarStyle>
  );
};
