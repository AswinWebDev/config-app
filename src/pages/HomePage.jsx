import styled from "styled-components";
import Card1 from "../assets/images/image2.png";
import Card2 from "../assets/images/image3.png";
import { useState } from "react";

const HomePageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 70px;
`;
const CardContainer = styled.div`
  // height: 500px;
`;
const Card = styled.img`
  // max-width: 323px;
  height: 488px;
`;
const CheckboxForm = styled.form`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const CheckboxInput = styled.input`
  width: 15px;
  height: 15px;
  background: #04356b;
  box-shadow: 0px 0px 2px #00000029;
  opacity: 1;
  margin-right: 10px;
`;
const CheckboxLabel = styled.label`
  font: normal normal normal 11px/17px Poppins;
  letter-spacing: 0px;
  color: #7e7a7a;
`;

const HomePage = () => {
  const [isChecked, setIsChecked] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (event) => {
    setIsChecked({
      ...{
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
      },
      [event.target.id]: event.target.checked,
    });
  };

  return (
    <HomePageContainer>
      <CardContainer>
        <Card src={Card2} alt="card1" />
        <CheckboxForm>
          <CheckboxInput
            type="checkbox"
            id="checkbox1"
            checked={isChecked.checkbox1}
            onChange={handleCheckboxChange}
          />
          <CheckboxLabel htmlFor="checkbox1">Layout Selected</CheckboxLabel>
        </CheckboxForm>
      </CardContainer>
      <CardContainer>
        <Card src={Card1} alt="card1" />
        <CheckboxForm>
          <CheckboxInput
            type="checkbox"
            id="checkbox2"
            checked={isChecked.checkbox2}
            onChange={handleCheckboxChange}
          />
          <CheckboxLabel htmlFor="checkbox2">Layout Selected</CheckboxLabel>
        </CheckboxForm>
      </CardContainer>
      <CardContainer>
        <Card src={Card2} alt="card1" />
        <CheckboxForm>
          <CheckboxInput
            type="checkbox"
            id="checkbox3"
            checked={isChecked.checkbox3}
            onChange={handleCheckboxChange}
          />
          <CheckboxLabel htmlFor="checkbox3">Layout Selected</CheckboxLabel>
        </CheckboxForm>
      </CardContainer>
    </HomePageContainer>
  );
};

export default HomePage;
