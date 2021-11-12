import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      .timeContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 0.2rem;
        border-bottom-left-radius: 0.5rem;


        @keyframes foldCard {
          0% {
            transform: rotateX(0deg);
          }
          30% {
            transform: rotatex(90deg);
          }

          60% {
            transform: rotatex(180deg);
          }

          90% {
            transform: rotatex(270deg);
          }

          100% {
            transform: rotatex(360deg);
          }
        }

        ::before {
          content: "";
          width: 4rem;
          height: 2rem;
          border-bottom-left-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
          border-top-left-radius: 0.4rem;
          border-top-right-radius: 0.4rem;
          background: ${({ theme }) => theme.colors.neutral.darkDesaturatedBlue};
          margin: 0 0 .05rem 0;
          box-shadow: 0px 6px 0px -3px rgba(0, 0, 0, 0.1);
          animation: ${({ isAnimated }) => isAnimated && '1s foldCard linear'};
          transform-origin: center bottom;
        }

        ::after {
          content: "";
          width: 4rem;
          height: 2rem;
          border-bottom-left-radius: 0.4rem;
          border-bottom-right-radius: 0.4rem;
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
          background: ${({ theme }) => theme.colors.neutral.darkDesaturatedBlue};
          box-shadow: 0px -6px 0px -3px rgba(0, 0, 0, 0.1);
        }

        .timeCard {
          position: absolute;

          h1 {
            color: ${({ theme }) => theme.colors.primary.softRed};
            font-size: 1.8rem;
            margin: 0;
          }
        }
      }

      span {
        font-size: ${({ theme }) => theme.typography.fontSize};
        color: ${({ theme }) => theme.colors.primary.grayishBlue};
        font-size: 7px;
        letter-spacing: 0.2rem;
      }


      @media (min-width: 700px) {
        .timeContainer {
          
          ::before {
            width: 5rem;
            height: 3rem;
          }

          ::after {
            width: 5rem;
            height: 3rem;
            background: ${({ theme }) => theme.colors.neutral.darkDesaturatedBlue};
          }

          .timeCard {

            h1 {
              color: ${({ theme }) => theme.colors.primary.softRed};
              font-size: 3rem;
              margin: 0;
            }
          }
        }

        span {
          font-size: 8px;
          letter-spacing: 0.2rem;
        }
      }
`;