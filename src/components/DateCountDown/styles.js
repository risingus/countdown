import styled from "styled-components";

export const Container = styled.div`
  && {
    display: flex;
    flex-direction: row;
    gap: .5rem;
    justify-content: center;
    align-items: center;
    margin: 0 1rem 0 1rem;

    @media (min-width:700px) {
      gap: 1.5rem;
    }
  }
`;
