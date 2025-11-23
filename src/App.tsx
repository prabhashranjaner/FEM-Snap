import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { Header, HeroSection, MobileNavigation } from "./layouts";
import { useState } from "react";

const AppWrapperStyle = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 128rem;
`;
function App() {
  const [IsMobileMenuActive, setIsMobileMenuActive] = useState(false);

  return (
    <AppWrapperStyle>
      <GlobalStyle />
      <Header setIsMobileMenuActive={setIsMobileMenuActive} />
      <MobileNavigation
        setIsMobileMenuActive={setIsMobileMenuActive}
        IsMobileMenuActive={IsMobileMenuActive}
      />

      <main>
        <HeroSection />
      </main>
    </AppWrapperStyle>
  );
}

export default App;
