import styled from "styled-components";

const FormButtonStyle = styled.button`
  background-color: #83c5be40;
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px;
  width: 253px;
  height: 42px;
  color: black;
  border-style: none;
  margin-top: 20px;
`;

interface ButtonProps {
  actionOnClick: () => void;
  text: string;
}

const FormButton = ({ actionOnClick, text }: ButtonProps): JSX.Element => {
  return (
    <FormButtonStyle type="submit" onClick={actionOnClick}>
      {text}
    </FormButtonStyle>
  );
};

export default FormButton;
