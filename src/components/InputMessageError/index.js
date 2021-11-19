import React from 'react';
import styled from 'styled-components';


const StyledSpan = styled.span`
  @font-face {
    font-family: redHat, sans-serif;
    src: url(RedHatText-Regular.ttf) format('truetype');
  }
  color: ${({ theme }) => (theme.colors.neutral.error)};
  font-size: 12px;
  font-family: redHat, sans-serif;
`;


export const InputMessageError = ({ message }) => (
  <>
    <StyledSpan>{message}</StyledSpan>
  </>
);