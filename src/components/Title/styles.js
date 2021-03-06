import styled from 'styled-components';


export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;
  margin: 0 1rem 0 1rem;
`;

export const TitleText = styled.h1`
  && {
    font-size: 1.3rem;
    letter-spacing: .4rem;
    color: ${({theme }) => theme.colors.neutral.white};
    text-align: center;

    @media (min-width:700px) {
      font-size: 2rem;
    }
  }
`;