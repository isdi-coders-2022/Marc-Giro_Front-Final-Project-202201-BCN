import styled from "styled-components";

const LogOutButtonStyle = styled.button`
  background-color: #83c5be40;
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px;
  width: 253px;
  height: 42px;
  color: black;
  border-style: none;
  margin-top: 20px;
  margin-bottom: 40px;
  :hover {
    cursor: pointer;
    background-color: hotpink;
  }
`;

interface ButtonProps {
  text: string;
  actionOnClick: () => void;
}

const LogOutButton = ({ text, actionOnClick }: ButtonProps): JSX.Element => {
  return (
    <LogOutButtonStyle onClick={actionOnClick} type="submit">
      {text}
    </LogOutButtonStyle>
  );
};

export default LogOutButton;
