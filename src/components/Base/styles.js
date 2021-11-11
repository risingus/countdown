import background from '../../assets/img/backgroundImg.svg';
import styled from "styled-components";

export const WebContainer = styled.div`
  && {
    background: ${({theme }) => theme.colors.neutral.veryDark};
    height: 100vh;
    width: 100vw;
    position: absolute;
    background-image: url(${background});
    display: flex;
    flex-direction: column;
    gap: 4rem;
    animation: infinityBackground 800s linear infinite;
    padding: 2rem 0 0 0;
    align-items: center;

      @keyframes infinityBackground {
        from {
          background-position: 0 0;
        }

        to {
          background-position: -100000px 0;
        }
      }

      @media (min-width:700px) {
        padding: 8rem 0 0 0;
      }
  }
`;