import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faCirclePlus,
  faBookmark,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const NavbarStyle = styled.div``;

export const Navbar = () => {
  return (
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
  );
};
