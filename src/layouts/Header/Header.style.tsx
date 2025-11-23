import styled from "styled-components";
import media from "../../styles/media";

export const HeaderElStyle = styled.header`
  position: sticky;
  top: 0;
  z-index: 25;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--height-header);
`;

export const LeftSideStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  ${media.laptop} {
    gap: 6rem;
  }
`;

export const RightSideStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const DesktopNavElStyle = styled.nav`
  display: none;

  ${media.tablet} {
    display: block;
  }
`;

export const HamburgerMenuStyle = styled.div`
  position: relative;
  width: 32px;
  height: 28px;
  cursor: pointer;

  ${media.tablet} {
    display: none;
  }
`;

export const LoginLinkStyle = styled.a`
  display: none;
  ${media.tablet} {
    display: block;
  }
`;

export const RegisterLinkStyle = styled.a`
  padding: 1rem 2rem;
  border: 2px solid var(--col-gray);
  border-radius: 12px;
  display: none;

  &:hover {
    border-color: var(--col-dark);
  }

  ${media.tablet} {
    display: block;
  }
`;
