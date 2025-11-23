import type { Dispatch, SetStateAction } from "react";
import NavList from "../../components/NavList/NavList";
import {
  DesktopNavElStyle,
  HamburgerMenuStyle,
  HeaderElStyle,
  LeftSideStyle,
  LoginLinkStyle,
  RegisterLinkStyle,
  RightSideStyle,
} from "./Header.style";

const Header = ({
  setIsMobileMenuActive,
}: {
  setIsMobileMenuActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <HeaderElStyle>
      <LeftSideStyle>
        <img alt="logo" src="/images/logo.svg" />

        <DesktopNavElStyle>
          <NavList />
        </DesktopNavElStyle>
      </LeftSideStyle>

      <RightSideStyle>
        <LoginLinkStyle href="#">Login</LoginLinkStyle>
        <RegisterLinkStyle href="#">Register</RegisterLinkStyle>
        <HamburgerMenuStyle>
          <img
            alt="menu"
            src="/images/icon-menu.svg"
            onClick={() => setIsMobileMenuActive(true)}
          />
        </HamburgerMenuStyle>
      </RightSideStyle>
    </HeaderElStyle>
  );
};

export default Header;
