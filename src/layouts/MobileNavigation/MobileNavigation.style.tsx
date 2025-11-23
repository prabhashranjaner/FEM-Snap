import styled from "styled-components";
import media from "../../styles/media";

export const OverlayStyle = styled.div`
  position: fixed;
  inset: 0;
  transform: translateX(-100%);
  transition: all 0.3s 0.3s;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);

  &.active {
    transform: translateX(0%);
    transition: all 0.3s;
  }

  ${media.tablet} {
    display: none;
  }
`;

export const WrapperStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 25rem;
  z-index: 100;
  transform: translateX(100%);
  opacity: 0;

  transition: all 0.5s;
  padding: 2.4rem;
  background-color: var(--col-light);

  &.active {
    transform: translateX(0%);
    transition: all 0.5s 0.3s;

    opacity: 1;
  }

  ${media.tablet} {
    display: none;
  }
`;

export const CancleIconWrapperStyle = styled.div`
  text-align: end;
  margin-bottom: 3rem;
  svg {
    cursor: pointer;
  }
`;

export const ListWrapperStyle = styled.div``;
