import styled from "styled-components";
import media from "../../styles/media";

export const WrapperStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${media.tablet} {
    flex-direction: row;
  }

  ${media.laptop} {
    gap: 3.5rem;
  }
`;
