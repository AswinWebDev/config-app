import styled from "styled-components";
const HeaderBarContainer = styled.div`
  flex: 1;
  height: 90px;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000001a;
  opacity: 1;
  //
  display: flex;
  align-items: center;
`;
const ShowAppText = styled.div`
  margin-left: 26px;
  // margin-top: 30px;
  text-align: left;
  font: normal normal bold 23px/34px Poppins;
  letter-spacing: 0px;
  color: #083d77;
  opacity: 1;
`;
const LoremIpsumText = styled.div`
  // text-align: left;
  font: normal normal 600 18px/27px Poppins;
  letter-spacing: 0px;
  color: #373737;
  opacity: 1;
  margin-left: auto;
`;
const SaveButton = styled.button`
background: #083D77 0% 0% no-repeat padding-box;
border-radius: 6px;
padding: 5px 35px;
color: #FFFFFF;
margin-left:23px;
margin-right:141px`;

const HeaderBar = () => {
  return (
    <HeaderBarContainer>
      <ShowAppText>Show App Configuration Tool</ShowAppText>
      <LoremIpsumText>Lorem ipsum Event</LoremIpsumText>
      <SaveButton>Save</SaveButton>
    </HeaderBarContainer>
  );
};

export default HeaderBar;
