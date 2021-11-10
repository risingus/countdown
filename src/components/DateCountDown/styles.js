import styled from "styled-components";

export const Container = styled.div`
  && {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    margin: 0 1rem 0 1rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      .timeContainer {
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 0.2rem;

        @keyframes fold {
          0% {
            transform: rotateX(0deg);
          }
          10% {
            transform: rotatex(180deg) translateZ(20px);
          }

          70% {
            transform: rotateX(180deg) translateZ(20px);
          }

          80% {
            transform: rotateX(0deg);
          }

          100% {
            transform: rotateX(0deg);
          }
        }
        ::before {
          content: "";
          width: 6rem;
          height: 3rem;
          border-bottom-left-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
          border-top-left-radius: 0.4rem;
          border-top-right-radius: 0.4rem;
          background: ${({ theme }) => theme.colors.neutral.darkDesaturatedBlue};
          margin: 0 0 0.018rem 0;
          box-shadow: 0px 6px 0px -3px rgba(0, 0, 0, 0.1);
          animation: 2s fold ease-in-out infinite;
          transform-origin: center bottom;
        }

        ::after {
          content: "";
          width: 6rem;
          height: 3rem;
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
            font-size: 3.5rem;
          }
        }
      }

      span {
        font-size: ${({ theme }) => theme.typography.fontSize};
        color: ${({ theme }) => theme.colors.primary.grayishBlue};
        font-size: 8px;
        letter-spacing: 0.2rem;
      }
`;
