import React from 'react';
import { TitleContainer, TitleText } from './styles';

export function Title({text}) {
  return (
    <TitleContainer>
      <TitleText>{text}</TitleText>
      
    </TitleContainer>
  )
}