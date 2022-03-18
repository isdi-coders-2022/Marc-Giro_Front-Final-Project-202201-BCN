import { useSelector } from "react-redux";
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
`;

export const LoginUserPage = (): JSX.Element => {
  const message = useSelector((state: RootState) => state.messageReducer);
  // console.log(message);
  return (
    <>
      <LoginUserPageStyle>
        <h2>Login</h2>
        <LoginForm message={message} />
      </LoginUserPageStyle>
    </>
  );
};
