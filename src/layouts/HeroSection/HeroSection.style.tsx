import styled from "styled-components";
import media from "../../styles/media";

export const SectionElStyle = styled.section`
  margin-inline: auto;
  width: 90vw;
  max-width: 128rem;

  ${media.tablet} {
    display: flex;
    align-items: center;
  }
`;

export const MobileImageWrapperStyle = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.tablet} {
    display: none;
  }
`;

export const DesktopImageWrapperStyle = styled.div`
  display: none;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.tablet} {
    display: block;
    height: calc(100vh - 8rem);
    width: 40%;
  }
`;

export const ContentStyle = styled.div`
  padding: 5rem 1.6rem;
  text-align: center;

  h1 {
    margin-bottom: 2rem;
    font-size: 3.6rem;
  }

  p {
    max-width: 40rem;
    margin-inline: auto;
    margin-bottom: 2.5rem;
  }

  ${media.tablet} {
    text-align: start;
    width: 60%;

    h1 {
      margin-bottom: 3rem;
      font-weight: 4rem;
    }

    p {
      margin-inline: 0 auto;
      margin-bottom: 3.5rem;
    }
  }

  ${media.laptop} {
    h1 {
      font-size: 6.4rem;
      margin-bottom: 4rem;
      span {
        display: block;
      }
    }

    p {
      margin-bottom: 4rem;
    }
  }
`;

export const ButtonStyle = styled.a`
  display: inline-block;
  font-weight: 700;
  background-color: var(--col-dark);
  font-size: 1.8rem;
  color: var(--col-light);
  padding: 1.4rem 2rem;
  border-radius: 12px;
  border: 2px solid transparent;
  transition: all 0.7s;

  &:hover {
    background-color: transparent;
    color: var(--col-dark);
    border-color: var(--col-dark);
  }
`;
