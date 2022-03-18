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
  margin-bottom: 40px;
  :hover {
    cursor: pointer;
    background-color: hotpink;
  }
`;

interface ButtonProps {
  text: string;
  disabled?: boolean;
  className?: string;
}

const FormButton = ({
  text,
  disabled,
  className,
}: ButtonProps): JSX.Element => {
  return (
    <FormButtonStyle disabled={disabled} className={className} type="submit">
      {text}
    </FormButtonStyle>
  );
};

export default FormButton;
