import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogOutButton from "../components/Buttons/LogOutButton";
import {
  clearMessageAction,
  logoutAction,
} from "../redux/actions/actionsCreators";
import { RootState } from "../redux/store";

const LogOutPageStyle = styled.main`
  display: flex;
  justify-content: center;
`;

export const LogOutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: RootState) => state.usersReducer);

  const logOut = () => {
    localStorage.clear();
    dispatch(clearMessageAction());
    dispatch(logoutAction());
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const toRender = isLoggedIn ? (
    <LogOutPageStyle>
      <LogOutButton actionOnClick={logOut} text="Log Out" />
    </LogOutPageStyle>
  ) : (
    <></>
  );
  return <>{toRender}</>;
};
