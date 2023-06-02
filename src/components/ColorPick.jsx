import styled from "styled-components";
import { HexColorPicker } from "react-colorful";

const ColorPickerContainer = styled.div`
  width: 897px;
  height: 221px; /* Adjust the height value as per your requirement */
  margin-top: 12px;
`;

const ColorPick = ({ color, setColor }) => {
  const handleOnChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <ColorPickerContainer>
      <HexColorPicker
        color={color}
        onChange={handleOnChange}
        style={{ width: "100%", height: "100%" }}
      />
    </ColorPickerContainer>
  );
};

export default ColorPick;
