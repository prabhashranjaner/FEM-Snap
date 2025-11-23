import styled from "styled-components";
import media from "../../styles/media";

export const ListElStyle = styled.li`
  cursor: pointer;

  ${media.tablet} {
    position: relative;
  }
`;

export const LabelStyle = styled.span<{ isArrow: boolean }>`
  position: relative;
  display: inline-flex;
  font-size: 1.7rem;
  font-weight: 700;
  transition: all 0.3s;

  &::after {
    content: url(/images/icon-arrow-down.svg);
    margin-left: 1rem;
    margin-bottom: 0.2rem;
    display: ${(p) => (p.isArrow ? "block" : "none")};
    transition: all 0.3s;
  }

  &.active::after {
    transform: rotate(180deg);
  }

  &:hover {
    color: var(--col-dark);
  }
`;
export const SubMenuStyle = styled.div`
  ${media.tablet} {
    position: absolute;
    top: 35px;
    right: 0;
    background-color: var(--col-light);
    box-shadow: 0 5px 40px 6px rgba(0, 0, 0, 0.2);
  }
`;
