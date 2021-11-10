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
    padding: 10rem 0 0 0;

    @keyframes infinityBackground {
    from {
      background-position: 0 0;
    }

    to {
      background-position: -100000px 0;
    }
  }
  }
`;