import styled from 'styled-components';
import background from '../../assets/img/footerBackground.svg';

export const FooterContainer = styled.div`
&& {
  background-image: url(${background});
  background-size: auto 100%;
  background-position: 0 0 ;
  background-repeat: repeat;
  bottom: 0;
  width: 100%;
  position: fixed;
  height: 12rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  animation: infinityBackground 600s linear infinite;

  .footerLink {
    text-decoration: none;
    margin-top: 4rem;
    
    .footerIcon {
      font-size: 2rem;
      color: ${({theme }) => theme.colors.primary.grayishBlue};
    }

    :hover {
      .footerIcon {
        color: ${({theme }) => theme.colors.primary.softRed};
      }
    }
  }

  @keyframes infinityBackground {
    from {
      background-position: 0 0;
    }

    to {
      background-position: -10000px 0;
    }
  }
}

`;



