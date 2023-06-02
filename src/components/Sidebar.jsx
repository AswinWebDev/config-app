import styled from "styled-components";
import HomeIconSvg from "../assets/icons/HomeLayoutIcon.svg";
import fontsIconSvg from "../assets/icons/fontsIcon.svg";
import MoreIconSvg from "../assets/icons/morePageIcon.svg";

const SidebarContainer = styled.div`
  width: 278px;
  height: 100vh;
  /* UI Properties */
  background: #083d77 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  align-items: start;
  justify-content: center;
`;
const MenuContainer = styled.div`
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;
//
const HomeText = styled.div`
  color: #c9e0f9;
`;
const FontsText = styled.div`
  color: #c9e0f9;
`;
const MoreText = styled.div`
  color: #c9e0f9;
`;
const HomeContainer = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
  &:hover {
    ${HomeText} {
      color: #80ff80;
    }
`;
const FontsContainer = styled.div`
  display: flex;
  gap: 9px;
  cursor: pointer;
  &:hover {
    ${FontsText} {
      color: #80ff80;
    }
`;
const MoreContainer = styled.div`
  display: flex;
  gap: 15px;
  cursor: pointer;
  &:hover {
    ${MoreText} {
      color: #80ff80;
    }
`;

const HomeIcon = styled.img``;
const FontsIcon = styled.img``;
const MoreIcon = styled.img``;

const Sidebar = ({ setTab }) => {
  return (
    <SidebarContainer>
      <MenuContainer>
        <HomeContainer
          onClick={() => {
            setTab("home");
          }}
        >
          <HomeIcon src={HomeIconSvg} alt="home layout icon" />
          <HomeText>Home Layouts</HomeText>
        </HomeContainer>
        <FontsContainer
          onClick={() => {
            setTab("font");
          }}
        >
          <FontsIcon src={fontsIconSvg} alt="fonts icon" />
          <FontsText>Fonts</FontsText>
        </FontsContainer>
        <MoreContainer
          onClick={() => {
            setTab("more");
          }}
        >
          <MoreIcon src={MoreIconSvg} alt="more page icon" />
          <MoreText>More Pages</MoreText>
        </MoreContainer>
      </MenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
