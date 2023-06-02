import styled from "styled-components";
import ColorPick from "../components/ColorPick";
import { useState } from "react";
import ColorValues from "../components/ColorValues";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const FontPageContainer = styled.div`
  margin-top: 111px;
`;
const FontNameSizeContainer = styled.div`
  display: flex;
  gap: 74px;
`;

const FontNameContainer = styled.div``;
const FontSizeContainer = styled.div``;

const FontNameSizeText = styled.div`
  font: normal normal 600 15px/23px Poppins;
  letter-spacing: 0px;
  color: #505050;
`;
// form stylings //
const Form = styled.form`
  margin-top: 8px;
`;
const Select = styled.select`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cbcbcb;
  width: 411px;
  height: 35px;
  font: normal normal normal 13px/20px Poppins;
  letter-spacing: 0px;
  color: #9e9e9e;
`;
const ColorPickerContainer = styled.div`
  margin-top: 31px;
`;
const SaveStyleContainer = styled.div`
  display: flex;
  margin-top: 22px;
  gap: 193px;
`;
const SaveButton = styled.button`
  background: #083d77 0% 0% no-repeat padding-box;
  padding: 0 20px;
  border-radius: 4px;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
`;

const FontPage = () => {
  // color picker state and saving rgba values//
  const [color, setColor] = useState("#ffffff");
  const hexToRgbA = (hex) => {
    let r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16),
      a = 100;
    return <ColorValues r={r} g={g} b={b} a={a} hex={hex} />;
  };

  return (
    <PageContainer>
      <FontPageContainer>
        <FontNameSizeContainer>
          <FontNameContainer>
            <FontNameSizeText>Font Name</FontNameSizeText>
            <Form>
              <Select name="fontFamily" id="family" defaultValue="">
                <option value="" disabled>
                  Select Font
                </option>
                <option value="Abril Fatface">Abril Fatface</option>
                <option value="Bodoni Moda">Bodoni Moda</option>
                <option value="Finger Paint">Finger Paint</option>
                <option value="Mukta">Mukta</option>
                <option value="Poppins">Poppins</option>
                <option value="Shadows Into Light">Shadows Into Light</option>
              </Select>
            </Form>
          </FontNameContainer>
          <FontSizeContainer>
            <FontNameSizeText>Font Size</FontNameSizeText>
            <Form>
              <Select name="fontSize" id="size" defaultValue="">
                <option value="" disabled>
                  Select Font
                </option>
                <option value="18px">18px</option>
                <option value="22px">22px</option>
                <option value="28px">28px</option>
                <option value="33px">33px</option>
                <option value="36px">36px</option>
                <option value="38px">38px</option>
              </Select>
            </Form>
          </FontSizeContainer>
        </FontNameSizeContainer>
        <ColorPickerContainer>
          <FontNameSizeText>Choose Color</FontNameSizeText>
          <ColorPick color={color} setColor={setColor} />
          <SaveStyleContainer>
            <SaveButton>Save Style</SaveButton>
            {hexToRgbA(color)}
          </SaveStyleContainer>
        </ColorPickerContainer>
      </FontPageContainer>
    </PageContainer>
  );
};

export default FontPage;
