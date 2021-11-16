import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    @font-face {
      font-family: redHatBold;
      src: url(RedHatText-Bold.ttf) format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: redHat;
      src: url(RedHatText-Regular.ttf) format('truetype');
    }

    ::-moz-selection {
      color: ${({ theme }) => theme.colors.neutral.white};
      background: ${({ theme }) => theme.colors.primary.softRed};
    }

    ::selection {
      color: ${({ theme }) => theme.colors.neutral.white};
      background: ${({ theme }) => theme.colors.primary.softRed};
    }

    font-family: redHatBold;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;