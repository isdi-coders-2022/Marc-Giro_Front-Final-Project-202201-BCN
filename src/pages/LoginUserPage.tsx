import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../components/Forms/LoginForm/LoginForm";
import { RootState } from "../redux/store";

const LoginUserPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    margin-top: 100px;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    @media (min-width: 800px) {
      margin-top: 100px;
      margin-bottom: 30px;
    }
  }
  & p {
    font-size: 13px;
  }
`;

export const LoginUserPage = (): JSX.Element => {
  const { isLoggedIn } = useSelector((state: RootState) => state.usersReducer);
  const message = useSelector((state: RootState) => state.messageReducer);
  return (
    <>
      {!isLoggedIn ? (
        <>
          <LoginUserPageStyle>
            <h2>Login</h2>
            <LoginForm message={message} />
            <p>
              Not registered yet? <Link to={"/register"}>Register</Link>
            </p>
          </LoginUserPageStyle>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
