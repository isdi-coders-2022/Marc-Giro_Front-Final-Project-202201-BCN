import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RegisterForm from "../components/Forms/RegisterForm/RegisterForm";
import { RootState } from "../redux/store";

const RegisterUserPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    margin-top: 30px;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    @media (min-width: 800px) {
      margin-bottom: 30px;
    }
  }
  & p {
    font-size: 13px;
  }
`;

export const RegisterUserPage = (): JSX.Element => {
  const message = useSelector((state: RootState) => state.messageReducer);
  return (
    <>
      <RegisterUserPageStyle>
        <h2>Sign Up</h2>
        <RegisterForm message={message} />
        <p>
          Already have an account? <Link to={"/login"}>Log in</Link>
        </p>
      </RegisterUserPageStyle>
    </>
  );
};
