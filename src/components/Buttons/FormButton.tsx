import styled from "styled-components";

const FormButtonStyle = styled.button`
  background-color: #83c5be40;
  font-size: 26px;
  font-weight: 500;
  border-radius: 10px;
  width: 316px;
  height: 62px;
  color: black;
  border-style: none;
`;

interface ButtonProps {
  actionOnClick: () => void;
  text: string;
}

const FormButton = ({ actionOnClick, text }: ButtonProps): JSX.Element => {
  return (
    <FormButtonStyle type="button" onClick={actionOnClick}>
      {text}
    </FormButtonStyle>
  );
};

export default FormButton;
