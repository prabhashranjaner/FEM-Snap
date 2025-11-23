import ClientList from "../../components/ClientList/ClientList";
import {
  ButtonStyle,
  ContentStyle,
  DesktopImageWrapperStyle,
  MobileImageWrapperStyle,
  SectionElStyle,
} from "./HeroSection.style";

const HeroSection = () => {
  return (
    <SectionElStyle>
      <MobileImageWrapperStyle>
        <img src="/images/image-hero-mobile.png" alt="hero" />
      </MobileImageWrapperStyle>

      <ContentStyle>
        <h1>
          Make <span>remote work</span>
        </h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar
        </p>

        <ButtonStyle href="#">Learn more</ButtonStyle>

        <ClientList />
      </ContentStyle>

      <DesktopImageWrapperStyle>
        <img src="/images/image-hero-desktop.png" alt="hero" />
      </DesktopImageWrapperStyle>
    </SectionElStyle>
  );
};

export default HeroSection;
