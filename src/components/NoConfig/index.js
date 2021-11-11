import React from 'react';
import {ReactComponent as ZeroConfig} from '../../assets/img/noConfig.svg'
import styled from 'styled-components'

const Container = styled.div`
  width: 50vw;
  margin: -3rem 0 0 0;

  @media (min-width: 700px) {
    width: 16rem;
  }
`;

export const TitleText = styled.h5`
  && {
    letter-spacing: .1rem;
    color: ${({theme }) => theme.colors.neutral.white};
    text-align: center;
  }
`;

export function NoConfig() {
  return (
    <Container>
      <ZeroConfig />
      <TitleText>
        Click on the last link below to configure the countDown
      </TitleText>
    </Container>
    
  )
}