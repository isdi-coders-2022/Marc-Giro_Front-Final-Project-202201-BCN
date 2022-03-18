import { useSelector } from "react-redux";
import styled from "styled-components";
import RegisterForm from "../components/Forms/RegisterForm/RegisterForm";
import { RootState } from "../redux/store";

const RegisterUserPageStyle = styled.div`
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

export const RegisterUserPage = (): JSX.Element => {
  const message = useSelector((state: RootState) => state.messageReducer);
  console.log(message);
  return (
    <>
      <RegisterUserPageStyle>
        <h2>Sign Up</h2>
        <RegisterForm message={message} />
      </RegisterUserPageStyle>
    </>
  );
};
