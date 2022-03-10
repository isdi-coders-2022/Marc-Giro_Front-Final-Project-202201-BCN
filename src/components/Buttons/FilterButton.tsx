import styled from "styled-components";

const FilterButtonStyle = styled.button`
  background-color: #89b0ae60;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  width: 100px;
  height: 37px;
  color: black;
  border-style: none;
`;

interface ButtonProps {
  actionOnClick: () => void;
  text: string;
}

const FilterButton = ({ actionOnClick, text }: ButtonProps): JSX.Element => {
  return (
    <FilterButtonStyle type="button" onClick={actionOnClick}>
      {text}
    </FilterButtonStyle>
  );
};

export default FilterButton;
