import styled from "styled-components";

const PaginationButtonStyle = styled.button`
  background-color: #335c6750;
  font-size: 12px;
  font-weight: 600;
  border-radius: 10px;
  width: 70px;
  height: 30px;
  color: black;
  border-style: none;
`;

interface ButtonProps {
  actionOnClick: () => void;
  text: string;
}

const PaginationButton = ({
  actionOnClick,
  text,
}: ButtonProps): JSX.Element => {
  return (
    <PaginationButtonStyle type="button" onClick={actionOnClick}>
      {text}
    </PaginationButtonStyle>
  );
};

export default PaginationButton;
