import styled from "styled-components";

const ColorValuesContainer = styled.div`
  width: 272px;
  height: 57px;
  display: flex;
  gap: 10px;
  /* UI Properties */
  background: transparent url("img/tool-cool-color-picker copy.png") 0% 0%
    no-repeat padding-box;
`;
const ValueBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const ValueBox = styled.div`
  border: 1px solid #cbcbcb;
 padding: 0 8px;
`;
const NameBox = styled.div``;
const ColorValues = ({ r, g, b, a, hex }) => {
  return (
    <ColorValuesContainer>
      <ValueBoxContainer>
        <ValueBox>{hex.slice(1).toUpperCase()}</ValueBox>
        <NameBox>Hex</NameBox>
      </ValueBoxContainer>
      <ValueBoxContainer>
        <ValueBox>{r}</ValueBox>
        <NameBox>R</NameBox>
      </ValueBoxContainer>
      <ValueBoxContainer>
        <ValueBox>{g}</ValueBox>
        <NameBox>G</NameBox>
      </ValueBoxContainer>
      <ValueBoxContainer>
        <ValueBox>{b}</ValueBox>
        <NameBox>B</NameBox>
      </ValueBoxContainer>
      <ValueBoxContainer>
        <ValueBox>{a}</ValueBox>
        <NameBox>A</NameBox>
      </ValueBoxContainer>
    </ColorValuesContainer>
  );
};

export default ColorValues;
