import styled from "styled-components";
import media from "../../styles/media";

export const WrapperStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 5rem;

  ${media.tablet} {
    justify-content: flex-start;
    gap: 1rem;
  }

  ${media.laptop} {
    gap: 5rem;
  }
`;
