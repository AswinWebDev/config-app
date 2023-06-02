import styled, { createGlobalStyle } from "styled-components";
import Sidebar from "./components/Sidebar";
import HeaderBar from "./components/HeaderBar";
import FontPage from "./pages/FontPage";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import MorePage from "./pages/MorePage";

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  font-family: 'Poppins', sans-serif;
}`;

const Container = styled.div`
  display: flex;
`;
const PageContainer = styled.div`
  flex: 1;
`;
const App = () => {
  const [tab, setTab] = useState("home");
  return (
    <Container>
      <GlobalStyle />
      <Sidebar setTab={setTab} />
      <PageContainer>
        <HeaderBar />
        {tab === "font" && <FontPage />}
        {tab === "home" && <HomePage />}
        {tab === "more" && <MorePage />}
      </PageContainer>
    </Container>
  );
};

export default App;
